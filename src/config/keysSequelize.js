const { DATABASE } = require('./keys')

module.exports = {
  username: DATABASE.USER,
  password: DATABASE.PASSWORD,
  database: DATABASE.NAME,
  host: DATABASE.HOST,
  dialect: DATABASE.DIALECT,
  port: DATABASE.PORT
}
