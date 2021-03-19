const userCryptoCurrenciesModel = require('../models/userCryptoCurrencies')

const userFilter = () => {
  const where = {}
  const limitValue = 1
  const offsetValue = 0
  const self = this

  this.get = async () => {
    const result = userCryptoCurrenciesModel.findAll({
      where,
      limit: limitValue,
      offset: offsetValue
    })
    return result
  }

  this.and = (label, value) => {
    where[label] = value
    return self
  }

  this.limit = value => {
    limitValue = value
    return self
  }

  this.offset = value => {
    offsetValue = value
    return self
  }

  return self
}

module.exports = userFilter
