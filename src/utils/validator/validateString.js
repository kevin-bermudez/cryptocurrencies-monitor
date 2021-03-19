const Joi = require('joi')

const validateString = options => {
  let validator
  const { min, max, required, include } = options

  validator = Joi.string()
  if (min) {
    validator = validator.min(min)
  }
  if (max) {
    validator = validator.max(max)
  }
  if (required) {
    validator = validator.required()
  }

  if (include) {
    validator = validator.valid(...include)
  }

  return validator
}

module.exports = validateString
