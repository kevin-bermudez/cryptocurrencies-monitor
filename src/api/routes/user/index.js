const createUser = require('./createUser')
const createToken = require('./createToken')
const express = require('express')
const router = express.Router()

const userRoutes = serviceLocator => {
  createUser(router, serviceLocator)
  createToken(router, serviceLocator)

  return router
}

module.exports = userRoutes
