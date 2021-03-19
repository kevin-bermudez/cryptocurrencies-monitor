const Joi = require('joi')

const validateNumber = options => {
  let validator
  const { min, max, required, integer } = options

  validator = Joi.number()

  if (integer) {
    validator = validator.integer()
  }

  if (min) {
    validator = validator.min(min)
  }
  if (max) {
    validator = validator.max(max)
  }
  if (required) {
    validator = validator.required()
  }

  return validator
}

module.exports = validateNumber
