# VarChar
VarChar is a dynamic word-guessing mobile application. Users are able to:
- choose any desired category of words
- begin a timed round of the game
- one player gives hints of the displayed word while other players guess the word
- At the end of each round, the players can see how many words they got correct 
- choose to begin a new round

#### [Link to wireframes](https://github.com/llouison/Project_04_VarChar/tree/master/assets)

## Technologies Used
- React Native: to simultaneously create a performant iOS and Android mobile application
- React Navigation: to handle routing between screens
- Expo XDE: to reduce the code to simple javascript and then translate it to be built for both platforms and to publish the app
- TwinWord API: to enable dynamic search and provide word-associations for any input category

## Coding Wins
Understanding how to route native screens in the parent component using React Navigation
```
const VarChar = StackNavigator({
  Home: { screen: HomeScreen },
  Category: { screen: CategoryScreen },
  Game: { screen: GameScreen },
  Results: { screen: ResultsScreen },
});

export default () => <VarChar />;
```
Learning the new JSX syntax and styling conventions for React-Native as well as how to navigate between screens and pass props 
```
render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate('Category', { player: this.state.player, words: params.words })} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Play</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
```

## Unsolved Problems
- accessing the camera with react-native-camera
- connecting players through react-native-webRTC
- persisting high score data in a database