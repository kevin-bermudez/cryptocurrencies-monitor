/**
 * @openapi
 * /crypto-currencies:
 *  get:
 *   security:
 *    - bearerAuth: []
 *   description: Este ednpoint retorna la lista de todas las criptomonedas disponibles
 *   responses:
 *    200:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: List all crypto currencies
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
 *              price:
 *               type: number
 *               example: 1324
 *              name:
 *               type: string
 *               example: Bitcoin
 *              image:
 *               type: string
 *               example: https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579
 *              lastUpdated:
 *               type: date
 *               example: 2021-03-19T07:47:15.840Z
 *
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
