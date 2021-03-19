const simpleRequestGeckoMock = jest.fn().mockResolvedValue({
  data: {
    bitcoin: {
      eur: 48668,
      ars: 100,
      usd: 500
    }
  }
})

module.exports = simpleRequestGeckoMock
