/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
const exampleRoute = app => {
  app.get('/example', (req, res) => {
    res.send('Hello World!')
  })
}

module.exports = exampleRoute
