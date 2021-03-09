const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const excersiseSchema = new Schema({
  username: { type: String, required: true},
  description: { type: String, required: true},
  duration: { type: Number, required: true},
  date: { type: Date, required: true},
}, {
  timestamps: true,
});

const Excersise = mongoose.model('Excersise', excersiseSchema);

module.exports = Excersise;