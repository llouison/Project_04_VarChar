import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { TWIN_WORD_KEY } from 'react-native-dotenv';

export default class ChatScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      prompt: 'Choose a Category',
      category: '',
      words: [],
      play: styles.invisible,
    };
    this.handleCategoryInput=this.handleCategoryInput.bind(this);
    this.fetchWords = this.fetchWords.bind(this);
  }

  handleCategoryInput(event) {
    this.setState({category: event.target.value})
  }

  fetchWords() {
    console.log('pressed')
    fetch(`https://twinword-word-associations-v1.p.mashape.com/associations/?entry=${this.state.category}`, {
      headers: {
        'X-Mashape-Key': TWIN_WORD_KEY,
      },
    })
    .then((res) => {
      res.json()
      .then((jsonRes) => {
        console.log(jsonRes);
        if (jsonRes.result_code === '462'){
          this.setState({
            prompt: 'Try Another Word'
          })
        }
        else {
          this.setState({
            words: jsonRes.associations_array,
            play: styles.button2,
            prompt: 'Choose a Category',
          })
        }
        
      })
    })
  }

  componentWillUnmount(){
    this.setState({
          play: styles.invisible,
          prompt: 'Choose a Category',
        })
  }

  static navigationOptions = {
    title: 'Category',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>{this.state.prompt}</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter any word"
            onChangeText={(category) => this.setState({category})}
            value={this.state.category}
        />
        <TouchableOpacity onPress={() => this.fetchWords()} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Game', { category: this.state.category, words: this.state.words, player: params.player})} underlayColor="white">
          <View style={this.state.play}>
            <Text style={styles.buttonText}>Play</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98E7EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prompt: {
    fontFamily: 'MarkerFelt-Wide',
    fontSize: 25,
    color: '#FFF',
    marginBottom: 20,
    textShadowColor: '#77B5B7',
    textShadowOffset: {width: 1, height: 1},
  },
  input: {
    width: 200, 
    height: 40, 
    padding: 10,
    color: '#77B5B7',
    borderColor: '#77B5B7', 
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: '#FAFAFA',
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
    marginBottom: 10,
    width: 175,
    alignItems: 'center',
    backgroundColor: '#FABF58',
  },
  button2: {
    borderRadius: 5,
    marginBottom: 10,
    width: 175,
    alignItems: 'center',
    backgroundColor: '#4DA167',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    color: 'white',
  },
  invisible: {
    display: 'none',
  }
});

