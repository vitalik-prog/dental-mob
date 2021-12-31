const axios = require ("axios");
var mongoose = require('mongoose');
const dateFns = require('date-fns')
const {validationResult} = require('express-validator')
const {Appointment, Patient} = require('../models')

function AppointmentController() {
}

const all = async function (req, res) {
  await Appointment
    .aggregate([
      { $group: {
        _id: "$date",
          data: { $push: {
            id: "$_id",
            patientId: "$patient",
            //patient: await Patient.findOne({ _id: mongoose.Types.ObjectId( "$patient" ) }),
            patient: { $in: [ "patient" ] },
            dentNumber: "$dentNumber",
              diagnosis: "$diagnosis",
            price: "$price",
              date: "$date",
              time: "$time"
          } }
      } },
      { $sort: { _id: 1 } },
    ])
    .exec(function (err, docs) {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err
        })
      }

      res.status(200).json({
        success: true,
        data: docs
      })
    })
}

const create = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: errors.array()
    })
  }

  const data = {
    patient: req.body.patient,
    dentNumber: req.body.dentNumber,
    diagnosis: req.body.diagnosis,
    price: req.body.price,
    date: req.body.date,
    time: req.body.time,
  }

  let patient;
  try {
    patient = await Patient.findOne({_id: data.patient})
  } catch (e) {
    return res.status(404).json({
      success: false,
      message: "Patient not found"
    })
  }

  Appointment.create(data, function (err, doc) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err
      })
    }

    const year = data.date.split('-')[2]
    const month = data.date.split('-')[1]
    const day = data.date.split('-')[0]
    const hours = data.time.split(':')[0]
    const minutes = data.time.split(':')[1]
    const sendingTime = new Date(year, month - 1, day, hours, minutes).getTime()
    const postponedTimeTwoHours = 3600000 * 2

    const phoneNumber = patient.phone.replace(/[^0-9]/g,"")
    const appointmentTime = data.date + `+` + data.time
    const formattedSendingTime = dateFns.format(new Date(sendingTime - postponedTimeTwoHours), 'yyyy-MM-dd HH:mm:00')

    // Time format to postpone sms - 2021-12-31 15:34:55
    // ----- Commented to prevent balance reduce -----
    // axios.get(`https://api.mobizon.ua/service/message/sendsmsmessage?recipient=${phoneNumber}&text=You+have+an+appointment+${appointmentTime}&params[name]=blabla&params[deferredToTs]=${formattedSendingTime}&apiKey=${process.env.SMS_API_KEY}`)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })

    res.status(201).json({
      success: true,
      data: doc
    })
  })
}

const update = async function (req, res) {
  const appointmentId = req.params.id
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: errors.array()
    })
  }

  const data = {
    dentNumber: req.body.dentNumber,
    diagnosis: req.body.diagnosis,
    price: req.body.price,
    date: req.body.date,
    time: req.body.time,
  }

  Appointment.updateOne({ _id: appointmentId }, { $set: data }, function (err, doc) {
    if (!doc) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found"
      })
    }

    if (err) {
      return res.status(500).json({
        success: false,
        message: err
      })
    }

    res.status(200).json({
      success: true,
      data: doc
    })
  })
}

const remove = async function (req, res) {
  const id = req.params.id

  try {
    await Appointment.findOne({_id: id})
  } catch (e) {
    return res.status(404).json({
      success: false,
      message: 'Appointment not found'
    })
  }

  await Appointment.deleteOne({_id: id}, err => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err
      })
    }

    res.status(200).json({
      success: true,
    })
  })
}

AppointmentController.prototype = {
  all,
  create,
  remove,
  update
}

module.exports = AppointmentController
