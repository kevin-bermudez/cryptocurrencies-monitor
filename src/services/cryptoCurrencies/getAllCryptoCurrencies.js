const getAllCryptocurrencies = async (serviceLocator, favoriteCurrency, ids = false, withId = false) => {
  try {
    const urlRequest = `${serviceLocator.get('config.keys').EXTERNAL_SERVICES.URL_GECKO}/coins/markets`
    const params = {
      vs_currency: favoriteCurrency,
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: false
    }

    if (ids) {
      params.ids = ids.join(',')
    }

    const resultGecko = await serviceLocator.get('utils.requestHttp')(urlRequest, 'get', {
      params
    })

    const formattedCurrencies = resultGecko.data.map(currency => {
      const data = {
        symbol: currency.symbol,
        price: currency.current_price,
        name: currency.name,
        image: currency.image,
        lastUpdated: currency.last_updated
      }

      if (withId) {
        data.id = currency.id
      }

      return data
    })

    return formattedCurrencies
  } catch (error) {
    serviceLocator.get('utils.handleErrorsServices')(error)
  }
}

module.exports = getAllCryptocurrencies
