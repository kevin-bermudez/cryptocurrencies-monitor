/**
 * @openapi
 * /:
 *   get:
 *     description: Create a User
 *     responses:
 *       201:
 */
const createUser = (router, serviceLocator) => {
  const createTokenSchema = serviceLocator.get('api.schemaCreateToken')
  router.post(
    '/login',
    serviceLocator.get('api.validateSchemasMiddleware')(createTokenSchema, serviceLocator),
    async (req, res, next) => {
      try {
        const { userName, password } = req.body

        const resultWithToken = await serviceLocator.get('services.createToken')(serviceLocator, {
          userName,
          password
        })
        return serviceLocator.get('api.responseHttp')(res, 201, 'Token created', resultWithToken)
      } catch (error) {
        next(error)
      }
    }
  )
}

module.exports = createUser
