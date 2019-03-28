import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { getDeck } from '../utils/api'

class Deck extends Component {


  render() {
    const { navigation } = this.props
    const deck = navigation.getParam('deck')

    addCard = () => {
      console.log('add card');
    }

    startQuiz = () => {
      console.log('start quiz');
    }

    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
        <Button
          onPress={addCard}
          title="Add Card"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Quiz', {
            questions: deck.questions
          })}
          title="Start Quiz"
        />
      </View>
    )
  }
}

export default Deck
