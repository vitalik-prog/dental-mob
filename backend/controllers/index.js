const PatientController = require('./PatientController')
const AppointmentController = require('./AppointmentController')

module.exports = {
  PatientController: new PatientController(),
  AppointmentController: new AppointmentController()
}
