import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, AppRegistry, Alert, Picker } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'Player 1',
      logo: 'http://responsibledown.org/wp-content/uploads/2015/07/faq-icon.png',
    };
    this.showInstructions=this.showInstructions.bind(this);
  }

  showInstructions(){
    Alert.alert('Guess as many words as you can in one minute. Your partner will say, act, or even sing out the clues.')
  }

  static navigationOptions = {
    title: 'VarChar',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>VarChar</Text>
        <Text style={styles.logo}>?</Text>
        <View>
        {/*<Image source={{uri:this.state.logo}} style={{width: 250, height: 200, margin: 20}}/>
        <Picker selectedValue={this.state.player}
            onValueChange={(itemValue, itemIndex) => this.setState({player: itemValue})}>
            <Picker.Item label="Player 1" color='#E64230' value="Player 1" />
            <Picker.Item label="Player 2" color='#E64230' value="Player 2" />
        </Picker>*/}
        <Text style={styles.invisible}>Choose your position</Text>
        </View>
        <TouchableOpacity onPress={() => this.showInstructions()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Instructions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Category', { player: this.state.player })} underlayColor="white">
          <View style={styles.button}>
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
  title: {
    fontFamily: 'MarkerFelt-Wide',
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FE5F55',
    textShadowColor: '#77B5B7',
    textShadowOffset: {width: 1, height: 1}
  },
  logo: {
    fontFamily: 'AmericanTypewriter-Bold', 
    fontSize: 160,
    margin: 20,
    alignSelf: 'center',
    color: '#FE5F55',
    textShadowColor: '#77B5B7',
    textShadowOffset: {width: 1, height: 1}
  },
  invisible: {
    color: '#98E7EA',
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
  pickerItem: {
    color: 'white',
  }
});