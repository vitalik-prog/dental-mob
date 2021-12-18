const { check } = require('express-validator')

const validation = {
  create: [
    check('fullname').isLength({ min: 5 }),
    check('phone').isLength({ min: 12 })
  ]
}

module.exports = validation
