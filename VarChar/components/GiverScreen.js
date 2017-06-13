import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

export default class GiverScreen extends React.Component {
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
    title: 'Giver Screen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Word: Cat</Text>
        <View style={{margin:50}}>
          <Button
            onPress={() => navigate('Category')}
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

