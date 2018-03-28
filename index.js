import React from 'react'
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation'
import CoinScreenContainer from './js/screens/coin-screen';
import { Provider } from 'react-redux'
import configureStore from './js/configureStore'


const store = configureStore()

export const AppNavigator = StackNavigator({
  CoinScreen: {
    screen: CoinScreenContainer
  }
});

const RNRedux = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)

AppRegistry.registerComponent('ComponentAndState', () => RNRedux);
