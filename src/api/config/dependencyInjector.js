const serviceLocator = require('../../serviceLocator')()
const schemaBuilder = require('../../utils/validator')

module.exports = () => {
  serviceLocator.register('util.schemaBuilder', schemaBuilder)
  return serviceLocator
}
