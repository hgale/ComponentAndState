import React from 'react'
import { AppRegistry } from 'react-native';
import CoinScreenContainer from './js/screens/coin-screen';
import { Provider } from 'react-redux'
import configureStore from './js/configureStore'


const store = configureStore()

const RNRedux = () => (
  <Provider store={store}>
    <CoinScreenContainer />
  </Provider>
)

AppRegistry.registerComponent('ComponentAndState', () => RNRedux);
