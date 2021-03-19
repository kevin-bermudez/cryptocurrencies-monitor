/**
 * @openapi
 * /:
 *   get:
 *     description: Get all crypto currencies
 *     responses:
 *       200:
 */
const getAllCryptoCurrencies = (router, serviceLocator) => {
  const getTopNSchema = serviceLocator.get('api.schemaGetTopNCryptoCurrencies')

  router.get(
    '/top',
    serviceLocator.get('api.validateAuthMiddleware')(serviceLocator),
    serviceLocator.get('api.validateSchemasMiddleware')(getTopNSchema, serviceLocator),
    async (req, res, next) => {
      try {
        const { limit, order } = req.query
        const user = await serviceLocator.get('services.getUser')(serviceLocator, { id: req.userId })

        const cryptoCurrencies = await serviceLocator.get('services.getUserCryptocurrencies')(serviceLocator, {
          user: req.userId
        })

        if (!cryptoCurrencies.length) {
          return serviceLocator.get('api.responseHttp')(res, 404)
        }
        const currenciesUser = cryptoCurrencies.map(association => association.cryptoCurrency)
        const topCryptoCurrencies = await serviceLocator.get('services.getTopNCryptoCurrencies')(serviceLocator, {
          limit,
          favoriteCurrency: user[0].favoriteCurrency,
          cryptoCurrencies: currenciesUser,
          order
        })

        return serviceLocator.get('api.responseHttp')(res, 200, 'List top crypto currencies', {
          top: topCryptoCurrencies
        })
      } catch (error) {
        next(error)
      }
    }
  )
}

module.exports = getAllCryptoCurrencies
