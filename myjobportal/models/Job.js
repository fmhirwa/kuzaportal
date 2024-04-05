// models/Job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  client: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: String, required: true },
});

module.exports = mongoose.model('Job', JobSchema);
