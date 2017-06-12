import React from 'react';
import { StyleSheet, TextInput, Text, View, Image, TouchableHighlight, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this._onPressButton = this._onPressButton.bind(this);
    this.handlePlayerInput=this.handlePlayerInput.bind(this);
  }

  _onPressButton() {
    Alert.alert(`Let's Play ${this.state.name}!`)
  }

  handlePlayerInput(event) {
    this.setState({inputAuthorValue: event.target.value})
  }

  render() {
    let pic = {
      uri: 'http://www.smartfirstgraders.com/image-files/playing-cards-cartoony.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>VarChar</Text>
        <Image source={pic} style={{width: 175, height: 166}}/>
        <Text>Instructions:</Text>
        <Text>2 players guess words in one minute</Text>
        <View style={{padding: 10}}>
          <TextInput
            style={styles.input}
            placeholder="Player 1"
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
        </View>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start Game</Text>
          </View>
        </TouchableHighlight>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#817F82',
    textShadowOffset: {width: 1, height: 1}
  },
  input: {
    width: 200, 
    height: 40, 
    borderColor: 'black', 
    borderWidth: 1,
  },
  button: {
    marginBottom: 30,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
   buttonText: {
    fontSize: 15,
    padding: 20,
    color: 'white'
  },
});
