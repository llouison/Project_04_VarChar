import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

export default class ChatScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      category: '',
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
    title: 'Category Selection',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>Choose a Category {params.player1}</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter any word"
            onChangeText={(category) => this.setState({category})}
            value={this.state.category}
        />
        <View style={{margin:50}}>
          <Button
            onPress={() => navigate('Giver')}
            title="Select" 
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
  input: {
    width: 200, 
    height: 40, 
    borderColor: 'black', 
    borderWidth: 1,
  },
});

