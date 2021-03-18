const validateSchemasMiddleware = require('../../middlewares/validateSchemas')
const validateAuthMiddleware = require('../../middlewares/validateTokenAuh')
const createUserSchema = require('../../schemas/user/createUser')
const createTokenSchema = require('../../schemas/user/createToken')
const responseHttp = require('../../utils/responseHttp')

const apiInjector = serviceLocator => {
  serviceLocator.register('api.schemaCreateUser', createUserSchema)
  serviceLocator.register('api.schemaCreateToken', createTokenSchema)
  serviceLocator.register('api.validateSchemasMiddleware', validateSchemasMiddleware)
  serviceLocator.register('api.validateAuthMiddleware', validateAuthMiddleware)
  serviceLocator.register('api.responseHttp', responseHttp)
}

module.exports = apiInjector
