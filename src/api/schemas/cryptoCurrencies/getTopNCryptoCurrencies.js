const schemaBuilder = require('../../../utils/validator')

module.exports = schemaBuilder()
  .number('limit', {
    required: true,
    max: 25,
    integer: true
  })
  .string('order', {
    include: ['ASC', 'DESC']
  })
  .build()
