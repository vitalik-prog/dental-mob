const {validationResult} = require('express-validator')
const {Patient} = require('../models')

function PatientController() {
}

const all = function (req, res) {
  Patient.find({}, function (err, docs) {
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
    fullname: req.body.fullname,
    phone: req.body.phone
  }

  Patient.create(data, function (err, doc) {
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
  const patientId = req.params.id
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: errors.array()
    })
  }

  const data = {
    fullname: req.body.fullname,
    phone: req.body.phone
  }

  Patient.updateOne({_id: patientId}, {$set: data}, function (err, doc) {
    if (!doc) {
      return res.status(404).json({
        success: false,
        message: "Patient not found"
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
    await Patient.findOne({_id: id})
  } catch (e) {
    return res.status(404).json({
      success: false,
      message: 'Patient not found'
    })
  }

  await Patient.deleteOne({_id: id}, err => {
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

const getOne = async function (req, res) {
  const id = req.params.id
  try {
    const patient = await Patient.findById(id).populate('Appointments').exec()
    if (!patient) {
      return res.status(404).json({
        success: false,
        message: 'Patient not found'
      })
    }

    res.status(200).json({
      success: true,
      data: {
        ...patient._doc,
        appointments: patient.Appointments
      }
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err
    })
  }
}

  PatientController.prototype = {
    all,
    create,
    update,
    remove,
    getOne
  }

  module.exports = PatientController
