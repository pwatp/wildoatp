var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
// Define survey response model schema
var AnswersSchema = new Schema({
  phone: String,
  responses: [mongoose.Schema.Types.Mixed],
  overflow: [mongoose.Schema.Types.Mixed],
  spanish: { type: Boolean, default: false },
  participant: { type: Boolean, default: false },
  complete: { type: Boolean, default: false },
  home: { type: mongoose.Schema.Types.GeoJSON },
  work: { type: mongoose.Schema.Types.GeoJSON },
  school: { type: mongoose.Schema.Types.GeoJSON },
  flag: Boolean,
  optIn: Boolean
}, {
    timestamps: true
  });

AnswersSchema.plugin(AutoIncrement, { inc_field: 'beta' });
var Answers = mongoose.model('Answers', AnswersSchema);

module.exports = Answers;
