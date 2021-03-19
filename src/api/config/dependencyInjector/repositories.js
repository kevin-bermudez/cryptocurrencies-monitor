const userRepository = require('../../../repositories/user')
const userFilter = require('../../../repositories/userFilter')
const userCryptoCurrenciesFilter = require('../../../repositories/userCryptoCurrenciesFilter')

const repositoriesInjector = serviceLocator => {
  serviceLocator.register('filters.user', userFilter)
  serviceLocator.register('repositories.user', userRepository)
  serviceLocator.register('filters.userCryptocurrencies', userCryptoCurrenciesFilter)
}

module.exports = repositoriesInjector
