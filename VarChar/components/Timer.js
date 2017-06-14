import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

export default class ChatScreen extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    secondsRemaining: 10,
  };
  this.tick = this.tick.bind(this);
}

  componentDidMount(){
    this.interval = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1})
    if (this.state.secondsRemaining === 0) {
      Alert.alert('End of Round!')
      clearInterval(this.interval);
    }
  }

  static navigationOptions = {
    title: 'Timer',
  };
  render() {
    return (
      <View>
        <Text>{this.state.secondsRemaining}</Text>
      </View>
    );
  }
}
