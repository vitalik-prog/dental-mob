const express = require('express')
const cors = require('cors')
const { PatientController, AppointmentController } = require('./controllers')
const {
  patient: patientValidation,
  appointment: appointmentValidation
} = require('./utils/validation')

const db = require('./config/db')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/patients', PatientController.all)
app.post('/patients', patientValidation.create, PatientController.create)

app.get('/appointments', AppointmentController.all)
app.post('/appointments', appointmentValidation.create, AppointmentController.create)

app.listen(6666, () => 'Server started...')
