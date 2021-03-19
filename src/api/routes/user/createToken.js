/**
 * @openapi
 * /users/login:
 *  post:
 *   description: Este endpoint crea un token para mantener la sesión de un usuario
 *   parameters:
 *    - in: body
 *      schema:
 *       type: object
 *       properties:
 *        userName:
 *         type: string
 *         required: true
 *        password:
 *         type: string
 *         required: true
 *   responses:
 *    201:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: Token created
 *         data:
 *          type: object
 *          properties:
 *           token:
 *             type: string
 *             example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE2MTM4NDMzLCJleHAiOjE2MTYyMjQ4MzN9.WpBaffQkvAxFQA5F9Kek6Jh1JOFqmKIY4LX7d3AGA5k
 *
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
