const addUserCryptoCurrencies = require('../../../src/services/users/addUserCryptoCurrencies')
const serviceLocator = require('../../dependencyInjector')
const customError = require('../../../src/exceptions/customError')
const userCryptoCurrenciesFilterEmpty = require('../../mocks/userCryptoCurrenciesFIlterEmpty')

describe('add crytpocurrency service', () => {
  test('the cryptocurrency is already associated with the user', async () => {
    await expect(
      addUserCryptoCurrencies(serviceLocator, {
        id: 1,
        cryptoCurrency: 'bitcoin'
      })
    ).rejects.toThrow(customError)
  })

  test('added cryptocurrency to user OK', async () => {
    serviceLocator.register('filters.userCryptocurrencies', userCryptoCurrenciesFilterEmpty)
    const result = await addUserCryptoCurrencies(serviceLocator, {
      id: 2,
      cryptoCurrency: 'bitcoin'
    })
    expect(result).toBe(true)
  })
})
