/**
 * @openapi
 * /:
 *   get:
 *     description: Get all crypto currencies
 *     responses:
 *       200:
 */
const getAllCryptoCurrencies = (router, serviceLocator) => {
  router.get('/', serviceLocator.get('api.validateAuthMiddleware')(serviceLocator), async (req, res, next) => {
    try {
      const user = await serviceLocator.get('services.getUser')(serviceLocator, { id: req.userId })
      const allCryptoCurrencies = await serviceLocator.get('services.getAllCryptoCurrencies')(
        serviceLocator,
        user[0].favoriteCurrency
      )

      return serviceLocator.get('api.responseHttp')(res, 200, 'List all crypto currencies', {
        cryptoCurrencies: allCryptoCurrencies
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = getAllCryptoCurrencies
