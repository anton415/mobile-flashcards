import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, Button } from 'react-native';
import Decks from './components/Decks';
import NewDeck from './components/NewDeck'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { white, purple, pink } from './utils/colors';

const DecksStack = createStackNavigator({
  Decks: Decks
})

const NewDeckStack = createStackNavigator({
  NewDeck: NewDeck
})

export default createAppContainer(createBottomTabNavigator({
    Decks: DecksStack,
    NewDeck: NewDeckStack
  }
))
