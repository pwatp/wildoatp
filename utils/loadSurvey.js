require('dotenv').config();
const espSurvey = require('../data/survey_esp');
const engSurvey = require('../data/survey_eng');
const hardSurvey = [espSurvey, engSurvey];
var Questions = require('../models/Questions');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //USE ES6 PROMISES see:http://mongoosejs.com/docs/promises.html#plugging-in-your-own-promises-library

// DB CONNECTION
mongoose.connect(process.env.MONGODB, { 'useNewUrlParser': true, 'useFindAndModify': false, 'promiseLibrary': global.Promise ,  useUnifiedTopology: true }).then(
  () => { console.log('Mongoose connection open.') },
  err => { console.error(`${err.message}`) }
);

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

async function go(hardcode) {
  try {
    await asyncForEach(hardcode, async (survey) => {
      const questions = await Questions.findOneAndUpdate({
        title: survey.title
      }, {
          survey: survey.questions,
          intro: survey.intro,
          instructions: survey.instructions,
          disclaimer: survey.disclaimer,
          close: survey.close
        }, {
          new: true,
          upsert: true
        }).exec();
      console.log('Loaded: ' + questions.title);
    });
    mongoose.connection.close();
  } catch (e) {
    console.error(e); // 💩
    mongoose.connection.close();
  }
}

go(hardSurvey);