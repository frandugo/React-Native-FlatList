import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Image, 
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  YellowBox
} from 'react-native';

YellowBox.ignoreWarnings(['Remote debugger']);

class Users extends Component {

  constructor(){
    super()
    this.state = {
      users: [],
      isLoading: false,
      page: 1,
      result: 20
    }  
  }

  componentDidMount(){
    this.getData();
  }

  static navigationOptions = {
    title: 'Users',
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

  _renderItem = ({ item }) => {
    return(
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}
        onPress={() => this.props.navigation.navigate("Detail")} >
          <Image
            style={{ width: 70, height: 70, margin: 5, borderRadius: 35  }}
            source={{ uri: item.picture.thumbnail }}
          />
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 5 }}>{ item.name.first } { item.name.last } </Text>
            <Text style={{ fontSize: 16, color: 'white' }}>{ item.email }</Text>
          </View>   
      </TouchableOpacity>  
    )  
  }

  _separator(){
    return(
      <View style={{ borderBottomColor: '#D74444', borderBottomWidth: 0.4 }}></View>
    )
  }

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1,
      isLoading: true
    })
    this.getData();
  }

  loader = () => {
    return(
      this.state.isLoading ?
      <View style={ styles.loader }>
        <ActivityIndicator size='large' color='white' animating />
      </View> : null
    )
  }

  getData = async () =>{
    // const url = 'https://jsonplaceholder.typicode.com/photos';
    const url = `https://randomuser.me/api/?page=${ this.state.page }&results=${ this.state.result }&seed=abc`;
    // const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        // users: data.book_array,
        users: this.state.users.concat(data.results),
        isLoading: false
      })
      console.log('data ', data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          data={ this.state.users }
          renderItem={ this._renderItem }
          keyExtractor={(item, index) => `list-item-${index}` }
          ItemSeparatorComponent={ this._separator }
          onEndReached={ this.handleLoadMore }
          onEndReachedThreshold={0}
          ListFooterComponent={ this.loader }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'tomato',
  },
  loader: {
    marginTop: 10,
    alignItems: 'center'
  }
});


export default Users;