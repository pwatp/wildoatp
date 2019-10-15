const mongoose = require('mongoose');
const Questions = mongoose.model('Questions');

exports.getQuestions = async (req, res, next) => {   
  const survey = req.body.survey;
  const input = req.body.Body.trim();
  if (survey.responses.length === 0 && survey.participant === true && parseInt(input) === 2) {
    var title = 'Spanish';
  } else if (req.body.survey.spanish === true) {
    var title = 'Spanish';
  } else {
    var title = 'English';
  }
  const questions = await Questions.findOne({
    title: title
  });
  req.body.questions = questions;
  next();
};

exports.engQuestions = async (req, res, next) => { 
  const questions = await Questions.findOne({
    title: 'English'
  });
  req.body.questions = questions;
  next();
};