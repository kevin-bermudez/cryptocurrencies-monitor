const serviceLocator = require('../../../serviceLocator')()
const exceptionsInjector = require('./exceptions')
const repositoriesInjector = require('./repositories')
const servicesInjector = require('./services')
const apiInjector = require('./api')
const utilsInjector = require('./utils')
const configInjector = require('./config')

module.exports = () => {
  exceptionsInjector(serviceLocator)
  repositoriesInjector(serviceLocator)
  servicesInjector(serviceLocator)
  apiInjector(serviceLocator)
  utilsInjector(serviceLocator)
  configInjector(serviceLocator)
  return serviceLocator
}
