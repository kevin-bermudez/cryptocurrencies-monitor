const passwordIsValid = require('../../../services/users/passwordIsValid')
const favoriteCurrencyIsValid = require('../../../services/users/favoriteCurrencyIsValid')
const createUser = require('../../../services/users/createUser')
const createToken = require('../../../services/users/createToken')
const getAllCryptoCurrencies = require('../../../services/cryptoCurrencies/getAllCryptoCurrencies')
const getUser = require('../../../services/users/getUser')

const serviceInjector = serviceLocator => {
  serviceLocator.register('services.createUser', createUser)
  serviceLocator.register('services.createToken', createToken)
  serviceLocator.register('services.getUser', getUser)
  serviceLocator.register('services.passwordIsValid', passwordIsValid)
  serviceLocator.register('services.favoriteCurrencyIsValid', favoriteCurrencyIsValid)
  serviceLocator.register('services.getAllCryptoCurrencies', getAllCryptoCurrencies)
}

module.exports = serviceInjector
