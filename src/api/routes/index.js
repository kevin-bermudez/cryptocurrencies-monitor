const userRoutes = require('./user')
const apiBase = '/api/v1'

const routes = app => {
  const serviceLocator = app.get('serviceLocator')
  app.use(`${apiBase}/users`, userRoutes(serviceLocator))
}

module.exports = routes
