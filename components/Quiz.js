import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { getDeck } from '../utils/api'

class Quiz extends Component {
  render() {
    const { navigation } = this.props
    const questions = navigation.getParam('questions')


    return (
      <View>
        {Object.keys(questions).map(card => {
          return (
            <View key={questions[card].question}>
              <Text>{questions.indexOf(questions[card]) + 1}/{questions.length}</Text>
              <Text>{questions[card].question}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}

export default Quiz
