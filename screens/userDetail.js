import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

class Detail extends Component {

  static navigationOptions = {
      title: 'Users detail',
      headerStyle: {
          backgroundColor: '#F34136',
          borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 24
      }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={ styles.text }>Hello Detail</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    padding: 10
  },
  text: {
    fontSize: 20,
  }
});


export default Detail;