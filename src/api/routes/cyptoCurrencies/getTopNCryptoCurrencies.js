/**
 * @openapi
 * /crypto-currencies/top:
 *  get:
 *   security:
 *    - bearerAuth: []
 *   description: Este endpoint retorna el top de las criptomonedas más o menos cotizadas de las elegidas para seguir por el usuario autenticado
 *   parameters:
 *    - in: query
 *      type: number
 *      name: limit
 *      required: true
 *      max: 25
 *    - in: query
 *      type: string
 *      name: order
 *      enum:
 *       - ASC
 *       - DESC
 *   responses:
 *    200:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: List top crypto currencies
 *         data:
 *          type: object
 *          properties:
 *           cryptoCurrencies:
 *            type: array
 *            items:
 *             type: object
 *             properties:
 *              symbol:
 *               type: string
 *               example: btc
 *              name:
 *               type: string
 *               example: Bitcoin
 *              image:
 *               type: string
 *               example: https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579
 *              lastUpdated:
 *               type: date
 *               example: 2021-03-19T07:47:15.840Z
 *              prices:
 *               type: object
 *               properties:
 *                eur:
 *                 type: number
 *                 example: 123
 *                usd:
 *                 type: number
 *                 example: 123
 *                ars:
 *                 type: number
 *                 example: 123
 *
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
