const serviceLocator = require('../../dependencyInjector')
const createUser = require('../../../src/services/users/createUser')
const customError = require('../../../src/exceptions/customError')
const userFilterEmpty = require('../../mocks/userFilterEmpty')

describe('service create user', () => {
  test('password with less than 8 characters', async () => {
    await expect(
      createUser(serviceLocator, {
        name: 'test',
        lastName: 'test',
        username: 'test',
        password: 'a',
        favoriteCurrency: 'eur'
      })
    ).rejects.toThrow(customError)
  })

  test('invalid favorite currency', async () => {
    await expect(
      createUser(serviceLocator, {
        name: 'test',
        lastName: 'test',
        username: 'test',
        password: 'a1234567',
        favoriteCurrency: 'cop'
      })
    ).rejects.toThrow(customError)
  })

  test('duplicate username', async () => {
    await expect(
      createUser(serviceLocator, {
        name: 'test',
        lastName: 'test',
        username: 'test',
        password: '12345678',
        favoriteCurrency: 'eur'
      })
    ).rejects.toThrow(customError)
  })

  test('create user OK', async () => {
    serviceLocator.register('filters.user', userFilterEmpty)
    const result = await createUser(serviceLocator, {
      name: 'test',
      lastName: 'test',
      username: 'test',
      password: '12345678',
      favoriteCurrency: 'eur'
    })
    expect(result).toBe(true)
  })
})
