/**
 * @openapi
 * /:
 *   get:
 *     description: Add user cryptocurrency
 *     responses:
 *       201:
 */
const createUser = (router, serviceLocator) => {
  const addUserCryptoCurrencySchema = serviceLocator.get('api.schemaAddUserCryptoCurrency')
  router.post(
    '/',
    serviceLocator.get('api.validateAuthMiddleware')(serviceLocator),
    serviceLocator.get('api.validateSchemasMiddleware')(addUserCryptoCurrencySchema, serviceLocator),
    async (req, res, next) => {
      try {
        const { cryptoCurrency } = req.body

        await serviceLocator.get('services.addUserCryptoCurrencies')(serviceLocator, {
          user: req.userId,
          cryptoCurrency
        })
        return serviceLocator.get('api.responseHttp')(res, 201)
      } catch (error) {
        next(error)
      }
    }
  )
}

module.exports = createUser
