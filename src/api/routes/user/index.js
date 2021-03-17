const createUser = require('./createUser')
const express = require('express')
const router = express.Router()

const userRoutes = serviceLocator => {
  createUser(router, serviceLocator)

  return router
}

module.exports = userRoutes
