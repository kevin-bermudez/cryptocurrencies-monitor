const favoriteCurrencyIsValid = require('../users/favoriteCurrencyIsValid')

const getAllCryptocurrencies = async (serviceLocator, favoriteCurrency) => {
  try {
    const urlRequest = `${serviceLocator.get('config.keys').EXTERNAL_SERVICES.URL_GECKO}/coins/markets`
    const resultGecko = await serviceLocator.get('utils.requestHttp')(urlRequest, 'get', {
      params: {
        vs_currency: favoriteCurrency,
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false
      }
    })

    const formattedCurrencies = resultGecko.data.map(currency => {
      return {
        symbol: currency.symbol,
        price: currency.current_price,
        name: currency.name,
        image: currency.image,
        lastUpdated: currency.last_updated
      }
    })

    return formattedCurrencies
  } catch (error) {
    console.log('error services', error)
    serviceLocator.get('utils.handleErrorsServices')(error)
  }
}

module.exports = getAllCryptocurrencies
