const Joi = require('joi')
const validateString = require('./validateString')

const schemaBuilder = () => {
  const schema = {}
  const self = this

  this.build = () => {
    return Joi.object(schema)
  }

  this.string = (label, options) => {
    schema[label] = validateString(options)
    return self
  }

  return self
}

module.exports = schemaBuilder
