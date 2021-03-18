const serviceLocator = require('../../../serviceLocator')()
const exceptionsInjector = require('./exceptions')
const repositoriesInjector = require('./repositories')
const servicesInjector = require('./services')
const apiInjector = require('./api')

module.exports = () => {
  exceptionsInjector(serviceLocator)
  repositoriesInjector(serviceLocator)
  servicesInjector(serviceLocator)
  apiInjector(serviceLocator)
  return serviceLocator
}
