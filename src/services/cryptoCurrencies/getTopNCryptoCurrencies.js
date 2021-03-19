const getCryptoCurrenciesTopN = async (
  serviceLocator,
  { limit, favoriteCurrency, cryptoCurrencies, order = 'ASC' }
) => {
  try {
    const customError = serviceLocator.get('exceptions.customError')

    if (limit > 25 || limit < 1) {
      throw new customError(
        serviceLocator.get('exceptions.codeErrors').PAYLOAD,
        'The limit must be less than or equal to 25'
      )
    }

    if (!cryptoCurrencies.length) {
      throw new customError(serviceLocator.get('exceptions.codeErrors').PAYLOAD, 'No crypto currencies selected')
    }

    const cryptoCurrenciesAllInformation = await serviceLocator.get('services.getAllCryptoCurrencies')(
      serviceLocator,
      favoriteCurrency,
      cryptoCurrencies,
      true
    )

    const orderedAnLimitedCryptoCurrencies = cryptoCurrenciesAllInformation
      .sort((a, b) => (order === 'ASC' ? a - b : b - a))
      .slice(0, 25)

    const urlRequest = `${serviceLocator.get('config.keys').EXTERNAL_SERVICES.URL_GECKO}/simple/price`
    const params = {
      vs_currency: serviceLocator.get('utils.favoriteCurrenciesEnum').join(','),
      ids: cryptoCurrencies.join(',')
    }
    const resultGecko = await serviceLocator.get('utils.requestHttp')(urlRequest, 'get', {
      params
    })

    const result = orderedAnLimitedCryptoCurrencies.map(cryptoCurrency => {
      const data = {
        symbol: cryptoCurrency.symbol,
        name: cryptoCurrency.name,
        image: cryptoCurrency.image,
        lastUpdated: cryptoCurrency.lastUpdated,
        prices: resultGecko.data[cryptoCurrency.id]
      }

      return data
    })

    return result
  } catch (error) {
    serviceLocator.get('utils.handleErrorsServices')(error)
  }
}

module.exports = getCryptoCurrenciesTopN
