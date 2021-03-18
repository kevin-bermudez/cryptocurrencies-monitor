const schemaBuilder = require('../../../utils/validator')

module.exports = schemaBuilder()
  .string('userName', {
    required: true,
    max: 100
  })
  .string('password', {
    required: true,
    max: 60
  })
  .build()
