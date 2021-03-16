const serviceLocator = require('../../serviceLocator')()

module.exports = () => {
  serviceLocator.register('test', 'jo')
  return serviceLocator
}
