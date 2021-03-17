const userModel = require('../models/user')

const createUser = async ({ name, lastName, username, password, favoriteCurrency }) => {
  await userModel.create({ name, lastName, username, password, favoriteCurrency })
}

module.exports = {
  createUser
}
