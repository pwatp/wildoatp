const mongoose = require('mongoose');
const Answers = mongoose.model('Answers');
const summary = require('../utils/summary')

exports.allResults = async (req, res, next) => {
  const surveys = await Answers.find(); 
  req.body.results = surveys;
  next();
}

exports.results = (req, res) => {
  res.json(req.body);
}

exports.summary = async (req, res, next) => {
  const surveys = req.body.results;
  req.body.summary = summary.pipeline(surveys);
  next();
}