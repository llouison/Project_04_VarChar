import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

export default class ChatScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      category: '',
      words: ['cat', 'dog', 'bird', 'snake', 'elephant', 'rabbit', 'lizard', 'octopus', 'raccoon', ],
    };
    this.handleCategoryInput=this.handleCategoryInput.bind(this);
    this._onPressButton = this._onPressButton.bind(this);
  }

  handleCategoryInput(event) {
    this.setState({category: event.target.value})
  }

  _onPressButton() {
    Alert.alert(`You entered ${this.state.category}`)
  }

  static navigationOptions = {
    title: 'Category',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>Choose a Category</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter any word"
            onChangeText={(category) => this.setState({category})}
            value={this.state.category}
        />
        <TouchableOpacity onPress={() => navigate('Game', { category: this.state.category, words: this.state.words, player: params.player })} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Select</Text>
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
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    color: 'white',
  },
});

