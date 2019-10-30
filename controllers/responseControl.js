const mongoose = require('mongoose');
const Answers = mongoose.model('Answers');
const advance = require('../utils/nextQuestion')
// const summary = require('../utils/results/summary')

exports.getSurvey = async (req, res, next) => {
  const phone = req.body.From;
  const whitelist = process.env.WHITE_LIST;
  if (whitelist.includes(phone) === true) {
    const survey = await Answers.findOne({phone: phone, complete: false})   
    if (!survey) {
      const newSurvey = new Answers({ phone: phone});
      const survey = await newSurvey.save();
      req.body.survey = survey;
    } else {
      req.body.survey = survey;
    }
  } else {
    const survey = await Answers.findOne({ phone: phone});
    if (!survey) {
      const newSurvey = new Answers({ phone: phone});
      const survey = await newSurvey.save();
      req.body.survey = survey;
    } else {
      req.body.survey = survey;
    }
  }
  next();
}

exports.resultById = async (req, res, next) => {
  const result = await Answers.findById(req.params.id);
  // res.json(result)
  req.body.result = result;
  next();
}

exports.advanceSurvey = async (req, res) => {
  const input = req.body.Body.trim();
  const questions = req.body.questions;
  const survey = req.body.survey;
  await advance.handleNextQuestion(survey, questions, input);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end();
}