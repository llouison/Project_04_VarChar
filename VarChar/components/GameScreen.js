import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {  StyleSheet, 
          View, 
          Text, 
          TouchableOpacity, 
          Alert, 
          WebView, 
          Dimensions 
        } from 'react-native';

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      word: 'Press Start to Begin',
      secondsRemaining: 5,
      gotItButton: styles.invisible,
      passButton: styles.invisible,
      startButton: styles.button3,
      resultsButton: styles.invisible,
    };
    this.startGame = this.startGame.bind(this);
    this.tick = this.tick.bind(this);
    this.showPlayer = this.showPlayer.bind(this);
    this.gotWord = this.gotWord.bind(this);
    this.passWord = this.passWord.bind(this);
  }

  startGame(navigate, params){
    this.interval = setInterval(this.tick, 1000);
    this.setState({
      counter: this.state.counter + 1, 
      word: params.words[this.state.counter], 
      startButton: styles.invisible,
      passButton: styles.button2,
      gotItButton: styles.button,
      resultsButton: styles.invisible,
    })
  }

  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1})
    if (this.state.secondsRemaining === 0) {
      clearInterval(this.interval); 
      this.setState({
        secondsRemaining: 'Times Up',
        passButton: styles.invisible,
        gotItButton: styles.invisible,
        resultsButton: styles.button4,
      })
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  gotWord(){
    Alert.alert('You got it!')
  }

  passWord(wordArray) {
    if (this.state.counter !== wordArray.length){
      this.setState({
        counter: this.state.counter + 1, 
        word: wordArray[this.state.counter]
      })
    }
  }

  showPlayer(navigate, params){
    if (params.player === 'Player 2') {
      return (
        <View>
          <Text style={styles.gameText}>Word:{params.words[0]}</Text>
        </View>
      )
    } 
    if (params.player === 'Player 1') {
      return (
        <View>
        <Text style={styles.gameText}>Word:{this.state.word} counter:{this.state.counter} max:{params.words.length}</Text>
          <Text style={styles.gameText}>Category: {params.category}</Text>
          <View style={styles.controls}>
            <TouchableOpacity onPress={() => this.gotWord()} underlayColor="white">
              <View style={this.state.gotItButton}>
                <Text style={styles.buttonText}>Got It</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.passWord(params.words)} underlayColor="white">
              <View style={this.state.passButton}>
                <Text style={styles.buttonText}>Pass</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.startGame(navigate, params)} underlayColor="white">
              <View style={this.state.startButton}>
                <Text style={styles.buttonText}>Start</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('Results', { category: this.state.category, words: this.state.words, player: params.player })} underlayColor="white">
              <View style={this.state.resultsButton}>
                <Text style={styles.buttonText}>See Results</Text>
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
        <Text style={styles.gameText}>{this.state.secondsRemaining}</Text>
        <WebView
            source={{uri: 'https://llouison.github.io/p2p_videochat/#init'}}
            style={styles.mainCam}
        />
        {this.showPlayer(navigate, params)}
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
    justifyContent: 'center',
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
  button3: {
    borderRadius: 5,
    margin: 10,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#4DA167',
  },
  button4: {
    borderRadius: 5,
    margin: 10,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#FABF58',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
  },
  invisible: {
    display: 'none',
  }
});