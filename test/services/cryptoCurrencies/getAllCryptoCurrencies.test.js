const serviceLocator = require('../../dependencyInjector')
const getAllCryptocurrencies = require('../../../src/services/cryptoCurrencies/getAllCryptoCurrencies')
const requestGeckoMock = require('../../mocks/requestGecko')

describe('get all crypto currencies', () => {
  serviceLocator.register('utils.requestHttp', requestGeckoMock)
  test('first element return correct structure', async () => {
    const result = await getAllCryptocurrencies(serviceLocator, 'EUR')
    expect(result[0]).toHaveProperty('symbol')
    expect(result[0]).toHaveProperty('price')
    expect(isNaN(result[0].price)).toBe(false)
    expect(result[0]).toHaveProperty('name')
    expect(result[0]).toHaveProperty('image')
    expect(result[0]).toHaveProperty('lastUpdated')
  })
})
