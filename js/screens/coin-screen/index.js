import React, { Component } from 'react';

import LoadingScreen from './components/loading'
import Coins from './component.js'

/**
 * fetch coins from API
 * Note: By default, iOS will block any request that's not encrypted using SSL.
 * If you need to fetch from a cleartext URL (one that begins with http) you will
 * first need to add an App Transport Security exception.
 * See: https://facebook.github.io/react-native/docs/network.html for more details.
 */
const coinAPIBaseURL = 'https://api.coinmarketcap.com';

class CoinScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      coins: []
    }
  }

  componentDidMount() {
    return fetch(`${coinAPIBaseURL}/v1/ticker/?limit=10`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          coins: responseJson
        })
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { loading, coins } = this.state;
    console.log('coins');
    if (loading) {
      return <LoadingScreen />;
    }
    return <Coins coins={coins} />;
  }
}

export default CoinScreenContainer;
