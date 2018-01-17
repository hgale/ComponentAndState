import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import style from './style.js';

import CoinCard from './components/card';

class Coins extends React.Component {
  renderCoinCards() {
    const { coins } = this.props;
    return coins.map(coin => (
      <CoinCard
        key={coin.id}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
      />
    ));
  }

  render() {
    return (
      <ScrollView style={{ marginTop:40}} contentInset={{top:40, bottom:40, left:0, right:0}} contentContainerStyle={style.container}>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}

Coins.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Coins;
