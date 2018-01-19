import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import style from './style.js';

class Numbers extends React.Component {

  // create 100 rows

  prepData = () => {
    let data = []
    for (let i = 0; i < 100; i++) {
      data.push({ key: i })
    }
    return data
  }

  // render each row by creating 100 Text components in each row

  renderItem = ({ item }) => {
    let texts = []
    for (let i = 0; i < 100; i++) {
      texts.push(<Text key={i} style={style.text}>{i}</Text>)
    }
    return (
      <View style={style.item} key={item.key}>
        {texts}
      </View>
    )
  }

  // render a scroll view with each of the items

  render() {
    return (
      <ScrollView style={style.container}>
        {this.prepData().map((item) => this.renderItem({ item }))}
      </ScrollView>
    );
  }
}

export default Numbers;
