const userRoutes = require('./user')
const crytoCurrenciesRoutes = require('./cyptoCurrencies')
const apiBase = '/api/v1'

const routes = app => {
  const serviceLocator = app.get('serviceLocator')
  app.use(`${apiBase}/users`, userRoutes(serviceLocator))
  app.use(`${apiBase}/crypto-currencies`, crytoCurrenciesRoutes(serviceLocator))
}

module.exports = routes
