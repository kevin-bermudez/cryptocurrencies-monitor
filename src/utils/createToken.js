const jwt = require('jsonwebtoken')
const { PRIVATE_KEY_TOKEN } = require('../config/keys')

const createToken = (payload, expiresIn = '24h') => {
  return jwt.sign(payload, PRIVATE_KEY_TOKEN, { expiresIn })
}

module.exports = createToken
