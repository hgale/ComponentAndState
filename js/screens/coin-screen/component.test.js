import * as React from 'react'
import 'react-native'
import * as renderer from 'react-test-renderer'


import Coins from './component'

it('renders correctly', () => {
    const coinData = [
        {
            "id": "bitcoin",
            "name": "Bitcoin",
            "symbol": "BTC",
            "rank": "1",
            "price_usd": "10153.7",
            "price_btc": "1.0",
            "24h_volume_usd": "8078040000.0",
            "market_cap_usd": "170964192962",
            "available_supply": "16837625.0",
            "total_supply": "16837625.0",
            "max_supply": "21000000.0",
            "percent_change_1h": "0.33",
            "percent_change_24h": "-0.96",
            "percent_change_7d": "-10.74",
            "last_updated": "1517440467"
        },]    
  const tree = renderer.create(<Coins coins={coinData} />)
  expect(tree).toMatchSnapshot()
})