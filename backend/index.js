const express = require('express')
const cors = require('cors')
const { PatientController, AppointmentController } = require('./controllers')
const {
  patient: patientValidation,
  appointment: appointmentValidation
} = require('./utils/validation')

require('dotenv').config()
const db = require('./config/db')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/patients', PatientController.all)
app.post('/patients', patientValidation.create, PatientController.create)
app.delete('/patients/:id', PatientController.remove)
app.patch('/patients/:id', patientValidation.create, PatientController.update)
app.get('/patients/:id', PatientController.getOne)

app.get('/appointments', AppointmentController.all)
app.post('/appointments', appointmentValidation.create, AppointmentController.create)
app.delete('/appointments/:id', AppointmentController.remove)
app.patch('/appointments/:id', appointmentValidation.update, AppointmentController.update)

app.listen(6666, () => 'Server started...')
