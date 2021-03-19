const getCryptoCurrenciesTopN = require('../../../src/services/cryptoCurrencies/getTopNCryptoCurrencies')
const serviceLocator = require('../../dependencyInjector')
const customError = require('../../../src/exceptions/customError')
const mocksGetAllCryptoCurrencies = require('../../mocks/getAllCryptoCurrencies')
const mockGeckoSingleRequest = require('../../mocks/simpleRequestGecko')

describe('get cryptocurrencies top N', () => {
  test('limit is greater than 25', async () => {
    await expect(
      getCryptoCurrenciesTopN(serviceLocator, {
        limit: 26,
        favoriteCurrency: 'eur',
        cryptoCurrencies: ['bitcoin']
      })
    ).rejects.toThrow(customError)
  })

  test('No crypto currencies selected', async () => {
    await expect(
      getCryptoCurrenciesTopN(serviceLocator, {
        limit: 26,
        favoriteCurrency: 'EUR',
        cryptoCurrencies: []
      })
    ).rejects.toThrow(customError)
  })

  test.only('first element return correct structure', async () => {
    serviceLocator.register('services.getAllCryptoCurrencies', mocksGetAllCryptoCurrencies)
    serviceLocator.register('utils.requestHttp', mockGeckoSingleRequest)

    const result = await getCryptoCurrenciesTopN(serviceLocator, {
      limit: 25,
      favoriteCurrency: 'eur',
      cryptoCurrencies: ['bitcoin']
    })
    expect(result[0]).toHaveProperty('symbol')
    expect(result[0].prices).toHaveProperty('ars')
    expect(isNaN(result[0].prices.ars)).toBe(false)
    expect(result[0].prices).toHaveProperty('usd')
    expect(isNaN(result[0].prices.usd)).toBe(false)
    expect(result[0].prices).toHaveProperty('eur')
    expect(isNaN(result[0].prices.eur)).toBe(false)
    expect(result[0]).toHaveProperty('name')
    expect(result[0]).toHaveProperty('image')
    expect(result[0]).toHaveProperty('lastUpdated')
  })
})
