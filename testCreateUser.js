const createUser = require('./src/services/users/createUser')
const serviceExceptions = require('./src/exceptions/service')
const codeErrors = require('./src/exceptions/codeErrors')
const serviceLocator = require('./src/serviceLocator')()
const passwordIsValid = require('./src/services/users/passwordIsValid')
const favoriteCurrencyIsValid = require('./src/services/users/favoriteCurrencyIsValid')
const handleCryptText = require('./src/utils/handleCryptText')
const userRepository = require('./src/repositories/user')
const favoriteCurrencies = require('./src/utils/enums/favoriteCurrencies')
const userFilter = require('./src/repositories/userFilter')
serviceLocator.register('filters.user', userFilter)
serviceLocator.register('exceptions.serviceError', serviceExceptions)
serviceLocator.register('exceptions.codeErrors', codeErrors)
serviceLocator.register('services.passwordIsValid', passwordIsValid)
serviceLocator.register('services.favoriteCurrencyIsValid', favoriteCurrencyIsValid)
serviceLocator.register('utils.handleCryptText', handleCryptText)
serviceLocator.register('repositories.user', userRepository)
serviceLocator.register('utils.favoriteCurrencies', favoriteCurrencies)

const run = async () => {
  const result = await createUser(serviceLocator, {
    name: 'test',
    lastName: 'test',
    username: 'test',
    password: '12345678',
    favoriteCurrency: 'Euro'
  })

  console.log('result', result)
}
run().catch(error => {
  console.log(error.errors)
})
