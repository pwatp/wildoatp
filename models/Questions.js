var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const QuestionsSchema = new mongoose.Schema({
  title: String,
  intro: String,
  instructions: String,
  disclaimer: String,
  close: String,
  survey: [mongoose.Schema.Types.Mixed]
});

module.exports = Questions = mongoose.model('Questions', QuestionsSchema);