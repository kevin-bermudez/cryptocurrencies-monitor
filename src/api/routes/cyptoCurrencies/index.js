const getAllCryptocurrencies = require('./getAllCryptocurrencies')
const express = require('express')
const router = express.Router()

const userRoutes = serviceLocator => {
  getAllCryptocurrencies(router, serviceLocator)

  return router
}

module.exports = userRoutes
