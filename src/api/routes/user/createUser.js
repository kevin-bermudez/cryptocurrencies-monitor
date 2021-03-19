/**
 * @openapi
 * /users:
 *  post:
 *   description: Este endpoint crea un usuario
 *   parameters:
 *    - in: body
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         required: true
 *        lastName:
 *         type: string
 *         required: true
 *        userName:
 *         type: string
 *         required: true
 *        password:
 *         type: string
 *         required: true
 *        favoriteCurrency:
 *         type: string
 *         required: true
 *         enum:
 *          - eur
 *          - usd
 *          - ars
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
        return serviceLocator.get('api.responseHttp')(res, 201)
      } catch (error) {
        next(error)
      }
    }
  )
}

module.exports = createUser
