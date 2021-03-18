const requestGeckoMock = jest.fn().mockResolvedValue([
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 48608,
    market_cap: 905908122952,
    market_cap_rank: 1,
    fully_diluted_valuation: 1019656594075,
    total_volume: 51171569161,
    high_24h: 49935,
    low_24h: 45900,
    price_change_24h: 2311.55,
    price_change_percentage_24h: 4.9929,
    market_cap_change_24h: 43978856533,
    market_cap_change_percentage_24h: 5.10237,
    circulating_supply: 18657331,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 51628,
    ath_change_percentage: -5.95154,
    ath_date: '2021-03-13T20:49:26.606Z',
    atl: 51.3,
    atl_change_percentage: 94552.22289,
    atl_date: '2013-07-05T00:00:00.000Z',
    roi: null,
    last_updated: '2021-03-18T14:37:58.414Z'
  }
])

module.exports = requestGeckoMock
