const createUser = require('../../../src/services/users/createUser')

describe('service create user', () => {
  test('no mandatory fields', async () => {
    const resultCreateUser = await createUser()
    expect(resultCreateUser).toBe(true)
  })
})
