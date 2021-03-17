const serviceLocator = require('../../../serviceLocator')()
const exceptionsInjector = require('./exceptions')
const repositoriesInjector = require('./repositories')
const servicesInjector = require('./services')

module.exports = () => {
  exceptionsInjector(serviceLocator)
  repositoriesInjector(serviceLocator)
  servicesInjector(serviceLocator)
  return serviceLocator
}
