const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
  fullname: String,
  phone: String,
}, {
  timestamps: true
});

PatientSchema.virtual('Appointments', {
  ref: 'Appointment',
  localField: '_id',
  foreignField: 'patient',
  justOne: false
})

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient
