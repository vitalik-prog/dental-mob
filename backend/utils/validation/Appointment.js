const { check } = require('express-validator')

const validation = {
  create: [
    check('dentNumber').isNumeric().isInt({ min: 1, max:48 }),
    check('price').isInt({ min: 0, max: 300000 }),
    check('diagnosis').isString().isLength({ min: 3, max: 50 }),
    check('date').isLength({ min: 3, max: 50 }),
    check('time').isLength({ min: 3, max: 50 }),
    check('patient').isLength({ min: 1 }),
  ]
}

module.exports = validation
