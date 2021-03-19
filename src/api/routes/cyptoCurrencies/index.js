const getAllCryptocurrencies = require('./getAllCryptocurrencies')
const addCryptoCurrencies = require('./addUserCryptocurrency')
const getTopNCryptoCurrencies = require('./getTopNCryptoCurrencies')
const express = require('express')
const router = express.Router()

const userRoutes = serviceLocator => {
  getAllCryptocurrencies(router, serviceLocator)
  addCryptoCurrencies(router, serviceLocator)
  getTopNCryptoCurrencies(router, serviceLocator)

  return router
}

module.exports = userRoutes
