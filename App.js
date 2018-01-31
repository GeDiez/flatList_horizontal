/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ],
    month: 0,
    data: []
  }

  randomData = () => {
    return Array.from({length:28}).map((_, id) => {
      return {
        id,
        day: Math.floor(Math.random() * Math.floor(12)),
        month: this.state.months[this.state.month],
        year: 2015,
        amount: Math.floor(Math.random() * Math.floor(1000)) + 500
      }
    })
  }

  changedata = (direction) => {
    if (direction === 'RIGHT'){
      if(this.state.month > 11)
        this.setState(state => ({month: 0}), this.randomData)
      this.setState(state => ({month: state.month + 1}), this.randomData)
    }
  }

  render() {
    return (
      <View style={{margin: 5}}>
        <Text style={styles.welcome}>Some Text</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.changedata('RIGHT')}>
            <Text style={{padding: 5}}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={{flex: 1, textAlign: 'center'}}>Mes</Text>
          <TouchableOpacity onPress={() => this.changedata('RIGHT')}>
            <Text style={{padding: 5}}>{">"}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.randomData()}
          keyExtractor={item => item.id}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <View style={{backgroundColor: 'lightgray',width: 120, paddingBottom: 40, paddingTop: 40}}>
                <View style={{}}>
                  <Text>{item.day}/{item.month}/{item.year}</Text>
                  <Text>monto: {item.amount}</Text>
                </View>
              </View>)
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
