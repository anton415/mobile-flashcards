import React, { Component } from 'react'
import Decks from './components/Decks'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

const DecksStack = createStackNavigator({
  Decks: Decks,
  Deck: Deck,
  Quiz: Quiz,
  AddCard: AddCard
})

const NewDeckStack = createStackNavigator({
  NewDeck: NewDeck
})

const AppContainer =  createAppContainer(createBottomTabNavigator({
  Decks: DecksStack,
  NewDeck: NewDeckStack
}))

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
