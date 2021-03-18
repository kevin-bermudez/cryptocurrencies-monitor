const handleCryptText = require('../../../utils/handleCryptText')
const schemaBuilder = require('../../../utils/validator')
const favoriteCurrencies = require('../../../utils/enums/favoriteCurrencies')
const manageToken = require('../../../utils/manageToken')
const handleErrorsServices = require('../../../utils/handlerErrorsServices')
const requestHttp = require('../../../utils/requestHttp')
const getTokenWithHeaders = require('../../utils/getTokenWithHeaders')

const utilsInjector = serviceLocator => {
  serviceLocator.register('utils.handleCryptText', handleCryptText)
  serviceLocator.register('util.schemaBuilder', schemaBuilder)
  serviceLocator.register('utils.favoriteCurrencies', favoriteCurrencies)
  serviceLocator.register('utils.manageToken', manageToken)
  serviceLocator.register('utils.handleErrorsServices', handleErrorsServices)
  serviceLocator.register('utils.requestHttp', requestHttp)
  serviceLocator.register('utils.getTokenWithHeaders', getTokenWithHeaders)
}

module.exports = utilsInjector
