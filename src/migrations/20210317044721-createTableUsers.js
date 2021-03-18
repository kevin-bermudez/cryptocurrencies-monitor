const favoriteCurrencies = require('../utils/enums/favoriteCurrencies')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: { type: Sequelize.STRING(100), allowNull: false },
        lastName: { type: Sequelize.STRING(100), allowNull: false, field: 'last_name' },
        username: { type: Sequelize.STRING(100), allowNull: false },
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
}
