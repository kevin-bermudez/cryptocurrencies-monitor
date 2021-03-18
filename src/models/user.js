const Sequelize = require('sequelize')
const database = require('../config/databaseConnection')
const favoriteCurrencies = require('../utils/enums/favoriteCurrencies')

const userModel = database.define(
  'User',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: { type: Sequelize.STRING(100), allowNull: false },
    lastName: { type: Sequelize.STRING(100), allowNull: false, field: 'last_name' },
    userName: { type: Sequelize.STRING(100), allowNull: false },
    password: { type: Sequelize.STRING(60), allowNull: false },
    favoriteCurrency: {
      type: Sequelize.ENUM(favoriteCurrencies),
      allowNull: false,
      field: 'favorite_currency'
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'created_at'
    }
  },
  {
    tableName: 'users',
    updatedAt: false
  }
)

module.exports = userModel
