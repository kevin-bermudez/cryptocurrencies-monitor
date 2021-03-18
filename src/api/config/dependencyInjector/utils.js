const handleCryptText = require('../../../utils/handleCryptText')
const schemaBuilder = require('../../../utils/validator')
const favoriteCurrencies = require('../../../utils/enums/favoriteCurrencies')
const createToken = require('../../../utils/createToken')

const utilsInjector = serviceLocator => {
  serviceLocator.register('utils.handleCryptText', handleCryptText)
  serviceLocator.register('util.schemaBuilder', schemaBuilder)
  serviceLocator.register('utils.favoriteCurrencies', favoriteCurrencies)
  serviceLocator.register('utils.createToken', createToken)
}

module.exports = utilsInjector
