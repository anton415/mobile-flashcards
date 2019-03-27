import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { getDeck } from '../utils/api'

class Deck extends Component {
  render() {
    const { navigation } = this.props
    const deck = navigation.getParam('deck')

    return (
      <View>
        <Text>{deck.title}</Text>
      </View>
    )
  }
}

export default Deck
