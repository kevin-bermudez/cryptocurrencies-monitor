const userModel = require('../models/user')

const createUser = async ({ name, lastName, userName, password, favoriteCurrency }) => {
  console.log('name', name)
  await userModel.create({ name, lastName, userName, password, favoriteCurrency })
}

module.exports = {
  createUser
}
