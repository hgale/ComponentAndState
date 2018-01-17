import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import style from './style'

export const cryptoImages = {
  BTC:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609483/bitcoin_eqld4v.png',
  ETH:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609485/ethereum_nw0chu.png',
  XRP:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/ripple_p0xeut.png',
  BCH:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609483/bitcoin-cash_cvt54z.png',
  LTC:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609485/litecoin_q8e17h.png',
  DASH:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609484/dash_oltvqi.png',
  XEM:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/nem_imprip.png',
  BCC:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/bitconnect_oj1bo5.png',
  XMR:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/monero_wzk3ur.png',
  NEO:
    'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/neo_fvoo6c.png',
};

const {
  cardContainer,
  image,
  moneySymbol,
  upperRow,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  seperator,
  percentChangePlus,
  percentChangeMinus,
} = style;

class CoinCard extends React.Component {
  render() {
    const {
      symbol,
      coin_name,
      price_usd,
      percent_change_24h,
      percent_change_7d,
    } = this.props;
    return (
      <View style={cardContainer}>
        <View style={upperRow}>
          <Image style={image} source={{ uri: cryptoImages[symbol] }} />
          <Text style={coinSymbol}>{symbol}</Text>
          <Text style={seperator}>|</Text>
          <Text style={coinName}>{coin_name}</Text>
          <Text style={coinPrice}>
            {price_usd}
            <Text style={moneySymbol}> $ </Text>
          </Text>
        </View>

        <View style={statisticsContainer}>
          <Text>
            24h:
            <Text
              style={
                percent_change_24h < 0 ? percentChangeMinus : percentChangePlus
              }
            >
              {' '}
              {percent_change_24h} %{' '}
            </Text>
          </Text>
          <Text>
            7d:
            <Text
              style={
                percent_change_7d < 0 ? percentChangeMinus : percentChangePlus
              }
            >
              {' '}
              {percent_change_7d} %{' '}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

CoinCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  coin_name: PropTypes.string.isRequired,
  price_usd: PropTypes.string.isRequired,
  percent_change_24h: PropTypes.string.isRequired,
  percent_change_7d: PropTypes.string.isRequired,
};

export default CoinCard;
