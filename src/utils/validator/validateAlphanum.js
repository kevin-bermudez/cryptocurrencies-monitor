const Joi = require('joi')

const validateString = options => {
  let validator
  const { min, max, required } = options

  validator = Joi.string().alphanum()
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

module.exports = validateString
