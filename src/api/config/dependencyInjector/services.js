const passwordIsValid = require('../../../services/users/passwordIsValid')
const favoriteCurrencyIsValid = require('../../../services/users/favoriteCurrencyIsValid')
const createUser = require('../../../services/users/createUser')
const createToken = require('../../../services/users/createToken')

const serviceInjector = serviceLocator => {
  serviceLocator.register('services.createUser', createUser)
  serviceLocator.register('services.createToken', createToken)
  serviceLocator.register('services.passwordIsValid', passwordIsValid)
  serviceLocator.register('services.favoriteCurrencyIsValid', favoriteCurrencyIsValid)
}

module.exports = serviceInjector
