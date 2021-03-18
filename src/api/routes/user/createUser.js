/**
 * @openapi
 * /:
 *   get:
 *     description: Create a User
 *     responses:
 *       201:
 */
const createUser = (router, serviceLocator) => {
  const createUserSchema = serviceLocator.get('api.schemaCreateUser')
  router.post(
    '/',
    serviceLocator.get('api.validateSchemasMiddleware')(createUserSchema, serviceLocator),
    async (req, res, next) => {
      try {
        const { name, lastName, userName, password, favoriteCurrency } = req.body

        await serviceLocator.get('services.createUser')(serviceLocator, {
          name,
          lastName,
          userName,
          password,
          favoriteCurrency
        })
        serviceLocator.get('api.responseHttp')(res, 201)
      } catch (error) {
        console.log(error.message)
        next(error)
      }
    }
  )
}

module.exports = createUser
