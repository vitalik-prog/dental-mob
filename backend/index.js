const express = require('express')
const cors = require('cors')
const { PatientController } = require('./controllers')
const patientValidation = require('./utils/validation/Patient')

const db = require('./config/db')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/patients', PatientController.all)
app.post('/patients', patientValidation.create, PatientController.create)

app.listen(6666, () => 'Server started...')
