const validateSchemasMiddleware = require('../../middlewares/validateSchemas')
const validateAuthMiddleware = require('../../middlewares/validateTokenAuh')
const createUserSchema = require('../../schemas/user/createUser')
const createTokenSchema = require('../../schemas/user/createToken')
const addUserCryptoCurrency = require('../../schemas/cryptoCurrencies/addUserCryptoCurrency')
const getTopNCryptoCurrencies = require('../../schemas/cryptoCurrencies/getTopNCryptoCurrencies')
const responseHttp = require('../../utils/responseHttp')

const apiInjector = serviceLocator => {
  serviceLocator.register('api.schemaCreateUser', createUserSchema)
  serviceLocator.register('api.schemaCreateToken', createTokenSchema)
  serviceLocator.register('api.schemaAddUserCryptoCurrency', addUserCryptoCurrency)
  serviceLocator.register('api.schemaGetTopNCryptoCurrencies', getTopNCryptoCurrencies)
  serviceLocator.register('api.validateSchemasMiddleware', validateSchemasMiddleware)
  serviceLocator.register('api.validateAuthMiddleware', validateAuthMiddleware)
  serviceLocator.register('api.responseHttp', responseHttp)
}

module.exports = apiInjector
