const {validationResult} = require('express-validator')
const {Appointment, Patient} = require('../models')

function AppointmentController() {
}

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

  try {
    await Patient.findOne({_id: data.patient})
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
