const schemaBuilder = require('../../../utils/validator')

module.exports = schemaBuilder()
  .string('name', {
    required: true,
    max: 100
  })
  .string('lastName', {
    required: true,
    max: 100
  })
  .string('userName', {
    required: true,
    max: 100
  })
  .string('password', {
    required: true,
    max: 60
  })
  .string('favoriteCurrency', {
    required: true
  })
  .build()
