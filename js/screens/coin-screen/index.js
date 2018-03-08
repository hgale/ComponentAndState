import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingScreen from './components/loading'
import Coins from './component.js'

import fetchCoins from './actions';

const mapStateToProps = state => ({
  coins: state.coins.coins,
  loading: state.coins.loading,
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchCoins: () => dispatch(fetchCoins()),
});

class CoinScreenContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCoins();
  }

  render() {
    const { loading, coins } = this.props;
    if (loading) {
      return <LoadingScreen />;
    }
    return <Coins coins={coins} />;
  }
}

const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  CoinScreenContainer
);

export default reduxContainer;
