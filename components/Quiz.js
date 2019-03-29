import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { getDeck } from '../utils/api'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardIndex: 0
    }
  }

  nextCard = () => {
    console.log('next card');
    this.setState({
            cardIndex: this.state.cardIndex + 1
    }
    )
  }

  render() {
    const { navigation } = this.props
    const questions = navigation.getParam('questions')
    const { cardIndex } = this.state

    return (
      <View>
            <View>
              <Text>{questions.indexOf(questions[cardIndex]) + 1}/{questions.length}</Text>
              <Text>{questions[cardIndex].question}</Text>
              <Button
                onPress={this.nextCard}
                title="Next card"
              />
            </View>
      </View>
    )
  }
}

export default Quiz
