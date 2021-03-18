require('dotenv').config()

const keys = {
  API: {
    SERVER_PORT: process.env.SERVER_PORT
  },
  DATABASE: {
    HOST: process.env.DATABASE_HOST,
    PORT: process.env.DATABASE_PORT,
    NAME: process.env.DATABASE_NAME,
    USER: process.env.DATABASE_USER,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DIALECT: process.env.DATABASE_DIALECT
  },
  PRIVATE_KEY_TOKEN: process.env.PRIVATE_KEY_TOKEN,
  EXTERNAL_SERVICES: {
    URL_GECKO: 'https://coingecko.com/api/documentations/v3'
  }
}

module.exports = keys
