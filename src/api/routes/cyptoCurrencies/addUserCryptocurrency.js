/**
 * @openapi
 * /crypto-currencies:
 *  post:
 *   security:
 *    - bearerAuth: []
 *   description: Este endpoint asocia una cripto moneda al usuario autenticado al momento de la petición, solo se puede asociar una vez un usuario a una criptomoneda
 *   parameters:
 *    - in: body
 *      schema:
 *       type: object
 *       properties:
 *        cryptoCurrency:
 *         type: string
 *         required: true
 *         example: bitcoin
 *   responses:
 *    201:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: Created
 *
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
