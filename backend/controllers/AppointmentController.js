const { validationResult } = require('express-validator')
const { Appointment } = require('../models')

function AppointmentController() {}

const all = function (req, res) {
  Appointment.find({})
    .populate('patient')
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

const create = function (req, res) {
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

  Appointment.create(data, function (err, doc) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err
      })
    }

    res.status(201).json({
      success: true,
      data: doc
    })
  })
}

AppointmentController.prototype = {
  all,
  create
}

module.exports = AppointmentController
