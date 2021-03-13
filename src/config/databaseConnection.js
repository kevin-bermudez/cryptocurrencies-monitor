const { DATABASE } = require('./keys')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  DATABASE.NAME,
  DATABASE.USER,
  DATABASE.PASSWORD,
  {
    host: DATABASE.HOST,
    dialect: 'mysql',
    port: DATABASE.PORT
  }
)

module.exports = sequelize
