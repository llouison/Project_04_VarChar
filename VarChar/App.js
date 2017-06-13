import React from 'react';
import { StyleSheet, Image, View, Button, Text, TextInput, AppRegistry } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import CategoryScreen from './components/CategoryScreen'
import GiverScreen from './components/GiverScreen'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: ''
    };
    this.handlePlayer1Input=this.handlePlayer1Input.bind(this);
    this.handlePlayer2Input=this.handlePlayer2Input.bind(this);
  }

  handlePlayer1Input(event) {
    this.setState({player1: event.target.value})
  }

  handlePlayer2Input(event) {
    this.setState({player2: event.target.value})
  }

  static navigationOptions = {
    title: 'VarChar',
  };
  render() {
    const { navigate } = this.props.navigation;
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
            onChangeText={(player1) => this.setState({player1})}
            value={this.state.player1}
          />
          <TextInput
            style={styles.input}
            placeholder="Player 2"
            onChangeText={(player2) => this.setState({player2})}
            value={this.state.player2}
          />
        </View>
        <View style={{margin:50}}>
          <Button
            onPress={() => navigate('Category')}
            title="Start Game" 
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

const VarChar = StackNavigator({
  Home: { screen: HomeScreen },
  Category: { screen: CategoryScreen },
  Giver: { screen: GiverScreen },
});

export default () => <VarChar />;



