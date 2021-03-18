const handleCryptText = require('../../../utils/handleCryptText')
const schemaBuilder = require('../../../utils/validator')
const favoriteCurrencies = require('../../../utils/enums/favoriteCurrencies')
const createToken = require('../../../utils/createToken')
const handleErrorsServices = require('../../../utils/handlerErrorsServices')
const requestHttp = require('../../../utils/requestHttp')

const utilsInjector = serviceLocator => {
  serviceLocator.register('utils.handleCryptText', handleCryptText)
  serviceLocator.register('util.schemaBuilder', schemaBuilder)
  serviceLocator.register('utils.favoriteCurrencies', favoriteCurrencies)
  serviceLocator.register('utils.createToken', createToken)
  serviceLocator.register('utils.handleErrorsServices', handleErrorsServices)
  serviceLocator.register('utils.requestHttp', requestHttp)
}

module.exports = utilsInjector
