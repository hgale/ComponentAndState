import React from 'react';
import { FlatList, View, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';
import style from './style.js';

import CoinCard from './components/card';

class Coins extends React.Component {

  _keyExtractor = (item, index) => item.id;

  _renderCoinCard = ({item}) => (
    <CoinCard
      key={item.id}
      coin_name={item.name}
      symbol={item.symbol}
      price_usd={item.price_usd}
      percent_change_24h={item.percent_change_24h}
      percent_change_7d={item.percent_change_7d}
      />
  )

  render() {
    let { navigation, coins } = this.props
    return (
      <View style={style.container}>
        <View style={style.coinText}>
          <Text
          onPress={() => {
            // Alert.alert('You tapped the Coins!');
            navigation.navigate('CoinScreen')
          }}
          > PUSH NEW COIN PRICES </Text>
        </View>
        <FlatList
           data={coins}
           renderItem={this._renderCoinCard}
           keyExtractor={this._keyExtractor}
         />
      </View>
    );
  }
}

Coins.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Coins;
