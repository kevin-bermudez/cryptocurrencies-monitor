const serviceLocator = require('../../dependencyInjector')
const createToken = require('../../../src/services/users/createToken')
const customError = require('../../../src/exceptions/customError')

describe('service create token', () => {
  test('username does not exist', async () => {
    await expect(
      createToken(serviceLocator, {
        username: 'test1',
        password: 'a'
      })
    ).rejects.toThrow(customError)
  })

  test('username and password do not match', async () => {
    await expect(
      createToken(serviceLocator, {
        username: 'test',
        password: 'test'
      })
    ).rejects.toThrow(customError)
  })

  test('created token OK', async () => {
    const result = await createToken(serviceLocator, {
      username: 'test',
      password: 'test1234'
    })
    expect(result).toHaveProperty('token')
  })
})
