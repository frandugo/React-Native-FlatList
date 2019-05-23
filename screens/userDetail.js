import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image
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
    const { navigation } = this.props;
    const image = navigation.getParam('image', '/');
    const name = navigation.getParam('name', 'Francisco Duran');
    const email = navigation.getParam('email', 'frandugo@ymail.com');
    return (
      <View style={styles.container}>
        <Image
            style={{ width: 170, height: 170, margin: 5, borderRadius: 85  }}
            source={{ uri: image }}
        />
        <Text style={ styles.name }>{ name }</Text>
        <Text style={ styles.email }>{ email }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    padding: 10
  },
  image: {

  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  email: {
    color: 'white',
    fontSize: 20,
  }
});


export default Detail;