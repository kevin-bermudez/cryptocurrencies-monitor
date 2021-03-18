const userModel = require('../models/user')

const createUser = async ({ name, lastName, userName, password, favoriteCurrency }) => {
  await userModel.create({ name, lastName, userName, password, favoriteCurrency })
}

module.exports = {
  createUser
}
