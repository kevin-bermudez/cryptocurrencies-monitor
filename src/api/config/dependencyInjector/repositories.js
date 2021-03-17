const userRepository = require('../../../repositories/user')
const userFilter = require('../../../repositories/userFilter')

const repositoriesInjector = serviceLocator => {
  serviceLocator.register('filters.user', userFilter)
  serviceLocator.register('repositories.user', userRepository)
}

module.exports = repositoriesInjector
