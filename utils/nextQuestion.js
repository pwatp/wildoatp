const respond = require('./survey/respond');
const message = require('./survey/message');
const processInput = require('./survey/processInput')
const skip = require('./survey/skip')
const mongoose = require('mongoose');
const Answers = mongoose.model('Answers');


async function asyncForEach(array, callback) {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array)
	}
}

exports.handleNextQuestion = async (survey, questions, input) => {
	var responseLength = survey.responses.length;
	var currentQuestion = questions.survey[responseLength];
	// LOG SURVEY ID AND PROGRESS
	console.log(`${survey._id}:` + responseLength + "/" + questions.survey.length);

	// CHECK FOR ANOMOLIES 
	if (!survey) return message.sendMessage('Terribly sorry, but an error has occurred. ' + 'Please retry your message.', survey.phone);
	if (!input) return respond(survey, questions.survey);
	if (!currentQuestion || responseLength === questions.survey.length) {
		var overflowResponse = {};
		overflowResponse.response = input;
		survey.overflow.push(overflowResponse);
		await Answers.findByIdAndUpdate(survey._id, { overflow: survey.overflow }, { new: true, upsert: true });
		return message.sendMessage('Thank you for your message. You have already completed the survey.', survey.phone)
	};

	// PROCESS INPUT
	const srvy = await processInput.processInput(survey, questions, input);

	if (Object.keys(srvy)[0] == 'Err') {
		var errMsg = '';
		errMsg += Object.values(srvy)[0];
		const rspn = respond.response(survey, questions, errMsg);
		await message.asMessage(errMsg, survey.phone, 1.5);
		await message.asMessage(rspn, survey.phone, 3);
		return;
	};

	const skps = await skip.skip(srvy, questions);

	if (skps.responses.length === questions.survey.length) {
		skps.complete = true;
	}
	skps.updatedAt = Date.now();
	// SAVE SURVEY
	const svs = await Answers.findOneAndUpdate({ _id: skps._id }, skps, { new: true, upsert: true });
	// GET RESPONSE
	const rspns = respond.response(svs, questions);
	if (Array.isArray(rspns) && rspns !== null) {
		await asyncForEach(rspns, async (rspn) => {
			await message.asMessage(rspn, svs.phone, 3);
		});
	} else {
		await message.asMessage(rspns, svs.phone, 1.5);
	}
};

