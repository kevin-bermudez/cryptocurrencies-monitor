const validateSchemasMiddleware = require('../../middlewares/validateSchemas')
const createUserSchema = require('../../schemas/user/createUser')
const responseHttp = require('../../utils/responseHttp')

const apiInjector = serviceLocator => {
  serviceLocator.register('api.schemaCreateUser',createUserSchema)
  serviceLocator.register('api.validateSchemasMiddleware',validateSchemasMiddleware)
  serviceLocator.register('api.responseHttp',responseHttp)
}

module.exports = apiInjector
