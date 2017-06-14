import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import Timer from './Timer'

export default class GiverScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      category: '',
      counter: 0,
      word: 'Press Pass to Begin',
    };
    this.handleCategoryInput=this.handleCategoryInput.bind(this);
    this.passWord = this.passWord.bind(this);
    this.gotWord = this.gotWord.bind(this);
  }

  handleCategoryInput(event) {
    this.setState({category: event.target.value})
  }

  gotWord(){
      Alert.alert('You got it!')
  }
  
  passWord(max, wordArray) {
    if (this.state.counter !== max){
        this.setState({counter: this.state.counter + 1, word: wordArray[this.state.counter]})
    }
  }

  static navigationOptions = {
    title: 'Giver Screen',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <View style={styles.mainCam}>
            <Timer />
            <View style={styles.secondCam}></View>
        </View>
        <Text>Category: {params.category}</Text>
        <Text>Word:{this.state.word} counter:{this.state.counter} max:{params.words.length}</Text>
        <View style={{margin:50}}>
          <Button
            onPress={() => this.passWord(params.words.length, params.words)}
            title="Pass" 
          />
          <Button
            onPress={() => this.gotWord()}
            title="Got It" 
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6DD6DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainCam: {
    width: 250,
    height: 250,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondCam: {
    width: 100,
    height: 100,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200, 
    height: 40, 
    borderColor: 'black', 
    borderWidth: 1,
  },
});

