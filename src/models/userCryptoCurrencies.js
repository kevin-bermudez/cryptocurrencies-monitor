const Sequelize = require('sequelize')
const database = require('../config/databaseConnection')

const userModel = database.define(
  'UserCryptoCurrencies',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cryptoCurrency: {
      type: Sequelize.STRING(60),
      allowNull: false,
      field: 'crypto_currency'
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'created_at'
    }
  },
  {
    tableName: 'users_cryptocurrencies',
    updatedAt: false,
    indexes: [
      {
        unique: true,
        fields: ['user', 'crytpo_currency']
      }
    ]
  }
)

module.exports = userModel
