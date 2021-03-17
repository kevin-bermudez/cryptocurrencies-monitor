const favoriteCurrencies = require('../../utils/enums/favoriteCurrencies')

const favoriteCurrencyIsValid = favoriteCurrency => {
  return Object.values(favoriteCurrencies).includes(favoriteCurrency)
}

module.exports = favoriteCurrencyIsValid
