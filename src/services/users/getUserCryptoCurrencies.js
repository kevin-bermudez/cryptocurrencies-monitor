const getUserCryptoCurrencies = async (serviceLocator, { user, cryptoCurrency = null }) => {
  try {
    let filter = serviceLocator.get('filters.userCryptocurrencies')().and('user', user)
    if (cryptoCurrency) {
      filter = filter.and('crypto_currency', cryptoCurrency)
    }

    const result = await filter.get()
    return result
  } catch (error) {
    serviceLocator.get('utils.handleErrorsServices')(error)
  }
}

module.exports = getUserCryptoCurrencies
