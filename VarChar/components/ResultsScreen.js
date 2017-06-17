import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

export default class ResultsScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      category: '',
      words: ['cat', 'dog', 'bird', 'snake'],
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
    title: 'Results',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>Great Job {params.player}</Text>
        <TouchableOpacity onPress={() => navigate('Category', { player: this.state.player })} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Play Again</Text>
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
    fontSize: 20,
    color: '#E64230',
    marginBottom: 20,
  },
  input: {
    width: 200, 
    height: 40, 
    padding: 10,
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
    color: 'white'
  },
});

