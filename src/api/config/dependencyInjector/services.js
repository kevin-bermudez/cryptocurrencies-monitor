const passwordIsValid = require('../../../services/users/passwordIsValid')
const favoriteCurrencyIsValid = require('../../../services/users/favoriteCurrencyIsValid')
const createUser = require('../../../services/users/createUser')

const serviceInjector = serviceLocator => {
  serviceLocator.register('services.createUser', createUser)
  serviceLocator.register('services.passwordIsValid', passwordIsValid)
  serviceLocator.register('services.favoriteCurrencyIsValid', favoriteCurrencyIsValid)
}

module.exports = serviceInjector
