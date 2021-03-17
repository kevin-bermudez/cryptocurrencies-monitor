const serviceLocator = require('../../../serviceLocator')

/**
 * @openapi
 * /:
 *   get:
 *     description: Create a User
 *     responses:
 *       201:
 */
const createUser = (router, serviceLocator) => {
  router.post('/', async (req, res) => {
    res.send('Hello World!')
  })
}

module.exports = createUser
