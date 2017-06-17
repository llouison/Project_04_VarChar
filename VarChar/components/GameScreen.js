import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, View, Text, TouchableOpacity, Alert, WebView, Dimensions } from 'react-native';

export default class GiverScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      counter: 0,
      word: 'Press Pass to Begin',
      passButton: 'Start',
      secondsRemaining: 5,
    };
    this.tick = this.tick.bind(this);
    this.showPlayer = this.showPlayer.bind(this);
    this.gotWord = this.gotWord.bind(this);
    this.passWord = this.passWord.bind(this);
    this.showResults = this.showResults.bind(this);
  }
  componentDidMount(){
    this.interval = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1})
    if (this.state.secondsRemaining === 0) {
      Alert.alert('Times Up!')
      clearInterval(this.interval);
    }
  }

  showResults(navigate){
    if (this.state.secondsRemaining === 0) {
      navigate('Results', { player: this.state.player })
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  gotWord(){
      Alert.alert('You got it!')
  }

  passWord(max, wordArray) {
    Alert.alert('You passed!')
    this.setState({passButton: 'Pass'})
    if (this.state.counter !== max){
      this.setState({counter: this.state.counter + 1, word: wordArray[this.state.counter]})
    }
  }

  showPlayer(params){
    if (params.player === 'Player2') {
      return (
        <View>
          <Text style={styles.gameText}>Word:{this.state.word} counter:{this.state.counter} max:{params.words.length}</Text>
        </View>
      )
    } 
    if (params.player === 'Player1') {
      return (
        <View>
          <Text style={styles.gameText}>Category: {params.category}</Text>
          <View style={styles.controls}>
            <TouchableOpacity onPress={() => this.gotWord()} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Got It</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.passWord(params.words.length, params.words)} underlayColor="white">
              <View style={styles.button2}>
                <Text style={styles.buttonText}>{this.state.passButton}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  static navigationOptions = {
    title: 'Game',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    
    return (
        <View style={styles.container}>
        <Text style={styles.gameText}>{this.state.secondsRemaining} seconds</Text>
        <WebView
            source={{uri: 'https://llouison.github.io/p2p_videochat/#init'}}
            style={styles.mainCam}
        />
        {this.showPlayer(params)}
        {this.showResults(navigate)}
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
  mainCam: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  gameText: {
    fontFamily: 'MarkerFelt-Wide',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: '#77B5B7',
    textShadowOffset: {width: 1, height: 1},
    alignSelf: 'center',
  },
  controls: {
    flexDirection: 'row',
  },
   button: {
    borderRadius: 5,
    margin: 10,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#FABF58',
  },
  button2: {
    borderRadius: 5,
    margin: 10,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#E64230',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    color: 'white'
  },
});

