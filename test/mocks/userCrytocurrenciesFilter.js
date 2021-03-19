const userCryptoCurrenciesFilter = () => {
  const self = this

  this.get = jest.fn().mockResolvedValue([
    {
      user: 1,
      cryptoCurrency: 'bitcoin'
    }
  ])

  this.and = (label, value) => self

  this.limit = value => self

  this.offset = value => self

  return self
}

module.exports = userCryptoCurrenciesFilter
