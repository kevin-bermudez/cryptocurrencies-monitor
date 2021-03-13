require('dotenv').config()

const keys = {
  API: {
    SERVER_PORT: process.env.SERVER_PORT || 8010
  }
}

module.exports = keys
