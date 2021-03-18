const jwt = require('jsonwebtoken')
const { PRIVATE_KEY_TOKEN } = require('../config/keys')

const createToken = (payload, expiresIn = '24h') => {
  return jwt.sign(payload, PRIVATE_KEY_TOKEN, { expiresIn })
}

const decodeToken = token => {
  return jwt.verify(token, PRIVATE_KEY_TOKEN)
}

module.exports = { createToken, decodeToken }
