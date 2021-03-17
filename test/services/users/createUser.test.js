const createUser = require('../../../src/services/users/createUser')
const serviceExceptions = require('../../../src/exceptions/service')
const codeErrors = require('../../../src/exceptions/codeErrors')
const serviceLocator = require('../../../src/serviceLocator')()
const passwordIsValid = require('../../../src/services/users/passwordIsValid')
const favoriteCurrencyIsValid = require('../../../src/services/users/favoriteCurrencyIsValid')
const favoriteCurrencies = require('../../../src/utils/enums/favoriteCurrencies')
const handleCryptText = require('../../../src/utils/handleCryptText')
serviceLocator.register('exceptions.serviceError', serviceExceptions)
serviceLocator.register('exceptions.codeErrors', codeErrors)
serviceLocator.register('services.passwordIsValid', passwordIsValid)
serviceLocator.register('services.favoriteCurrencyIsValid', favoriteCurrencyIsValid)
serviceLocator.register('utils.handleCryptText', handleCryptText)
serviceLocator.register('utils.favoriteCurrencies', favoriteCurrencies)
serviceLocator.register('filters.user', {
  get: jest.fn().mockResolvedValue({
    name: 'test',
    lastName: 'test',
    username: 'test',
    password: 'a1234567',
    favoriteCurrency: 'Euro'
  })
})
serviceLocator.register('repositories.user', { createUser: jest.fn() })

describe('service create user', () => {
  test('password with less than 8 characters', async () => {
    await expect(
      createUser(serviceLocator, {
        name: 'test',
        lastName: 'test',
        username: 'test',
        password: 'a',
        favoriteCurrency: 'EUR'
      })
    ).rejects.toThrow(serviceExceptions)
  })

  test('invalid favorite currency', async () => {
    await expect(
      createUser(serviceLocator, {
        name: 'test',
        lastName: 'test',
        username: 'test',
        password: 'a1234567',
        favoriteCurrency: 'Peso Colombiano'
      })
    ).rejects.toThrow(serviceExceptions)
  })

  test('duplicate username', async () => {
    await expect(
      createUser(serviceLocator, {
        name: 'test',
        lastName: 'test',
        username: 'test',
        password: '12345678',
        favoriteCurrency: 'EUR'
      })
    ).rejects.toThrow(serviceExceptions)
  })

  test('create user OK', async () => {
    const result = await createUser(serviceLocator, {
      name: 'test',
      lastName: 'test',
      username: 'test',
      password: '12345678',
      favoriteCurrency: 'Euro'
    })
    expect(result).toBe(true)
  })
})
