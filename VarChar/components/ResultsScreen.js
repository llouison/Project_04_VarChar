import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, 
         View, 
         Text, 
         TouchableOpacity, 
         ScrollView
        } from 'react-native';

export default class ResultsScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      results: '',
    };
    this.displayWordsGuessed=this.displayWordsGuessed.bind(this);
    this.displayWordsMissed=this.displayWordsMissed.bind(this);
  }

  displayWordsGuessed(words) {
    return words.map((word, index) => {
        return (
            <View key={index}>
                <Text style={styles.textGuessed}>{word}</Text>
            </View>
        )
    })
  }

  displayWordsMissed(words) {
    return words.map((word, index) => {
        return (
            <View key={index}>
                <Text style={styles.textMissed}>{word}</Text>
            </View>
        )
    })
  }

  static navigationOptions = {
    title: 'Results',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>Score: {params.wordsGuessed.length}</Text>
        <ScrollView style={styles.scrollView}>
            {this.displayWordsGuessed(params.wordsGuessed)}
            {this.displayWordsMissed(params.wordsMissed)}
        </ScrollView>
        <TouchableOpacity onPress={() => navigate('Category', { player: params.player })} underlayColor="white">
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
    fontFamily: 'MarkerFelt-Wide',
    fontSize: 25,
    color: '#FFF',
    marginBottom: 20,
    textShadowColor: '#77B5B7',
    textShadowOffset: {width: 1, height: 1},
  },
  textGuessed: {
    fontFamily: 'MarkerFelt-Wide',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: '#77B5B7',
    textShadowOffset: {width: 1, height: 1},
    alignSelf: 'center',
    marginBottom: 20,
    textDecorationStyle: 'dashed'
  },
  textMissed: {
    fontFamily: 'MarkerFelt-Wide',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#E64230',
    textShadowColor: '#77B5B7',
    textShadowOffset: {width: 1, height: 1},
    alignSelf: 'center',
    marginBottom: 20,
    textDecorationStyle: 'dashed'
  },
  scrollView: {
    marginBottom: 10,
  },
  button: {
    borderRadius: 5,
    marginBottom: 20,
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

