const keys = require('../../../config/keys')

const configsInjector = serviceLocator => {
  serviceLocator.register('config.keys', keys)
}

module.exports = configsInjector
