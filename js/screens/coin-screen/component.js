import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style.js';

class Coins extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Coins UI goes here</Text>
      </View>
    );
  }
}

export default Coins;
