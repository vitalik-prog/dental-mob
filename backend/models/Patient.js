const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
  id: String,
  fullname: String,
  phone: String
}, {
  timestamps: true
});

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient
