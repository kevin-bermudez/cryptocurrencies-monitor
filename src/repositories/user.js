const userModel = require('../models/user')
const userCryptocurrenciesModel = require('../models/userCryptoCurrencies')

const createUser = async ({ name, lastName, userName, password, favoriteCurrency }) => {
  await userModel.create({ name, lastName, userName, password, favoriteCurrency })
}

const addCryptoCurrency = async ({ user, cryptoCurrency }) => {
  await userCryptocurrenciesModel.create({
    user,
    cryptoCurrency
  })
}

module.exports = {
  createUser,
  addCryptoCurrency
}
