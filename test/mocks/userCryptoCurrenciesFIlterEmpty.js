const userCryptoCurrenciesFilter = () => {
  const self = this

  this.get = jest.fn().mockResolvedValue([])

  this.and = (label, value) => self

  this.limit = value => self

  this.offset = value => self

  return self
}

module.exports = userCryptoCurrenciesFilter
