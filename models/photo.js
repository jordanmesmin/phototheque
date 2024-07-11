const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  image: String
});

module.exports = mongoose.model('Photo', photoSchema);
