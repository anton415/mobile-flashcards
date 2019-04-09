import React from 'react'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Decks from '../components/Decks'
import Deck from '../components/Deck'
import AddCard from '../components/AddCard'
import NewDeck from '../components/NewDeck'
import Quiz from '../components/Quiz'
import { Platform } from 'react-native'

const Tabs = createBottomTabNavigator ({
  DeckList: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        )
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NewDeck'
    }
  }
})

const StackNavigator = createStackNavigator ({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
})

const MainNavigator = createAppContainer(StackNavigator)

export default MainNavigator
