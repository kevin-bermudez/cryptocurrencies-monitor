const { DATABASE } = require('./keys')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  DATABASE.NAME,
  DATABASE.USER,
  DATABASE.PASSWORD,
  {
    host: DATABASE.HOST,
    dialect: DATABASE.DIALECT,
    port: DATABASE.PORT
  }
)

module.exports = sequelize
