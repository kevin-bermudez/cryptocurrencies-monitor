const getAllCyrptoCurrenciesMock = jest.fn().mockResolvedValue([
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    price: 48608,
    lastUpdated: '2021-03-18T14:37:58.414Z'
  }
])

module.exports = getAllCyrptoCurrenciesMock
