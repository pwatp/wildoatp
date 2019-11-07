const optionMaker = require('../utils/survey/optionMaker');
const fs = require('fs')
const json2xls = require('json2xls')

exports.singleXls = (req, res) => {
  const result = req.body.result;
  const questions = req.body.questions.survey;
  const megaBooty = new Array();
  const booty = new Array();
  result.responses.forEach((element, index) => {
    if (Array.isArray(element.answer) === true) {
      booty.push(element.answer.join());
    } else {
      booty.push(element.answer)
    }
  });
  const prettyAnswers = {
    _id: result._id,
    phone: result.phone,
    participant: result.participant,
    spanish: result.spanish,
    complete: result.complete,
    flag: result.flag,
    home: result.home,
    updatedAt: result.updatedAt,
    createdAt: result.createdAt,
    Question1: booty[0],
    Question2: booty[1],
    Question3: booty[2],
    Question4: booty[3],
    Question5: booty[4],
    Question6: booty[5],
    Question7: booty[6],
    Question8: booty[7],
    Question9: booty[8],
    Question10: booty[9],
    Question11: booty[10],
    Question12: booty[11],
    Question13: booty[12],
    Question14: booty[13],
    Question15: booty[14],
    Question16: booty[15],
    Question17: booty[16],
    Question18: booty[17],
    Question19: booty[18],
    Question20: booty[19],
    Question21: booty[20],
  }
  const prettyOptions = {
    _id: "Options",
    phone: null,
    participant: null,
    spanish: null,
    complete: null,
    flag: null,
    home: null,
    updatedAt: null,
    createdAt: null,
    Question1: questions[0].options,
    Question2: optionMaker.optionMaker(questions[1].options),
    Question3: optionMaker.optionMaker(questions[2].options),
    Question4: questions[3].options,
    Question5: optionMaker.optionMaker(questions[4].options),
    Question6: questions[5].options,
    Question7: questions[6].options,
    Question8: optionMaker.optionMaker(questions[7].options),
    Question9: optionMaker.optionMaker(questions[8].options),
    Question10: optionMaker.optionMaker(questions[9].options),
    Question11: optionMaker.optionMaker(questions[10].options),
    Question12: optionMaker.optionMaker(questions[11].options),
    Question13: optionMaker.optionMaker(questions[12].options),
    Question14: optionMaker.optionMaker(questions[13].options),
    Question15: optionMaker.optionMaker(questions[14].options),
    Question16: questions[15].options,
    Question17: questions[16].options,
    Question18: questions[17].options,
    Question19: questions[18].options,
  }
  const prettyQuestions = {
    _id: "Questions",
    phone: null,
    participant: null,
    spanish: null,
    complete: null,
    flag: null,
    home: null,
    updatedAt: null,
    createdAt: null,
    Question1: questions[0].text,
    Question2: questions[1].text,
    Question3: questions[2].text,
    Question4: questions[3].text,
    Question5: questions[4].text,
    Question6: questions[5].text,
    Question7: questions[6].text,
    Question8: questions[7].text,
    Question9: questions[8].text,
    Question10: questions[9].text,
    Question11: questions[10].text,
    Question12: questions[11].text,
    Question13: questions[12].text,
    Question14: questions[13].text,
    Question15: questions[14].text,
    Question16: questions[15].text,
    Question17: questions[16].text,
    Question18: questions[17].text,
    Question19: questions[18].text,
  }
  megaBooty.push(prettyQuestions)
  megaBooty.push(prettyOptions)
  megaBooty.push(prettyAnswers);
  var xls = json2xls(megaBooty);
  var today = new Date();
  var y = today.getFullYear();
  // JavaScript months are 0-based.
  var m = today.getMonth() + 1;
  var d = today.getDate();
  var h = today.getHours();
  var mi = today.getMinutes();
  var s = today.getSeconds();
  const theDate = y + "-" + m + "-" + d + "-" + h + mi;
  var fileName = `${theDate}_richmond-results.xlsx`;

  fs.writeFileSync(fileName, xls, 'binary');
  var options = {
    root: './',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
      'location': '/'
    }
  };

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      // next();
      // next(err);
    } else {
      next();
    }
  });

}


exports.allXls = (req, res) => {
  const results = req.body.results;
  const megaBooty = new Array();
  results.forEach(result => {
    const loot = result.responses;
    const booty = new Array();
    loot.forEach((element, index) => {
      if (Array.isArray(element.answer) === true) {
        booty.push(element.answer.join());
      } else {
        booty.push(element.answer)
      }
    });
    const pretty = {
      _id: result._id,
      phone: result.phone,
      participant: result.participant,
      spanish: result.spanish,
      complete: result.complete,
      flag: result.flag,
      home: result.home,
      updatedAt: result.updatedAt,
      createdAt: result.createdAt,
      Question1: booty[0],
      Question2: booty[1],
      Question3: booty[2],
      Question4: booty[3],
      Question5: booty[4],
      Question6: booty[5],
      Question7: booty[6],
      Question8: booty[7],
      Question9: booty[8],
      Question10: booty[9],
      Question11: booty[10],
      Question12: booty[11],
      Question13: booty[12],
      Question14: booty[13],
      Question15: booty[14],
      Question16: booty[15],
      Question17: booty[16],
      Question18: booty[17],
      Question19: booty[18],
      Question20: booty[19],
    }
    megaBooty.push(pretty);
  });
  var xls = json2xls(megaBooty);
  var today = new Date();
  var y = today.getFullYear();
  // JavaScript months are 0-based.
  var m = today.getMonth() + 1;
  var d = today.getDate();
  var h = today.getHours();
  var mi = today.getMinutes();
  var s = today.getSeconds();
  const theDate = y + "-" + m + "-" + d + "-" + h + mi;
  fs.writeFileSync(`${theDate}_wildomar-results.xlsx`, xls, 'binary');
  res.download(`${theDate}_wildomar-results.xlsx`);
}