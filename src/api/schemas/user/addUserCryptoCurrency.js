const schemaBuilder = require('../../../utils/validator')

module.exports = schemaBuilder()
  .string('cryptoCurrency', {
    required: true,
    max: 60
  })
  .build()
