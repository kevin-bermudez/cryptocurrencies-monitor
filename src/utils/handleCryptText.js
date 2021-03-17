const bcrypt = require('bcryptjs')

const createHash = plainText => {
  return bcrypt.hashSync(plainText)
}

const compareHash = (plainText, hash) => {
  return bcrypt.compareSync(plainText, hash)
}

module.exports = { createHash, compareHash }
