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

  constructor(){
    super()
    this.state = {
      data: []
    }  
  }

  componentDidMount(){
    // const url = 'https://jsonplaceholder.typicode.com/photos';
    const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        users: data.book_array
      })
      console.log('data ', data.book_array);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Detail</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  }
});


export default Detail;