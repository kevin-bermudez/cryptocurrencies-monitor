const favoriteCurrencies = require('../../utils/enums/favoriteCurrencies')

const favoriteCurrencyIsValid = favoriteCurrency => {
  return favoriteCurrencies.includes(favoriteCurrency)
}

module.exports = favoriteCurrencyIsValid
