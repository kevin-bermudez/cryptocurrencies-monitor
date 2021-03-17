const handleCryptText = require('../../../src/utils/handleCryptText')
const schemaBuilder = require('../../../utils/validator')
const favoriteCurrencies = require('../../../src/utils/enums/favoriteCurrencies')

const utilsInjector = serviceLocator => {
  serviceLocator.register('utils.handleCryptText', handleCryptText)
  serviceLocator.register('util.schemaBuilder', schemaBuilder)
  serviceLocator.register('utils.favoriteCurrencies', favoriteCurrencies)
}

module.exports = utilsInjector
