import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  coinText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
