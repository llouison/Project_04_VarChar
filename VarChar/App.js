import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import CategoryScreen from './components/CategoryScreen'
import GameScreen from './components/GameScreen'
import ResultsScreen from './components/ResultsScreen'


const VarChar = StackNavigator({
  Home: { screen: HomeScreen },
  Category: { screen: CategoryScreen },
  Game: { screen: GameScreen },
  Results: { screen: ResultsScreen },
});

export default () => <VarChar />;



