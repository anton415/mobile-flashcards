import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { getDecks } from '../utils/api';

class Decks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      decks: {}
    }
  }

  componentDidMount() {
    getDecks().then(results => {
      this.setState(() => ({ decks: results }))
    })
  }

  render() {
    const { decks } = this.state;

    return (
      <ScrollView>
        <View>
          <Text>Mobile flashcards</Text>
          {Object.keys(decks).map(deck => {
            return (
              <View key={decks[deck].title}>
                <TouchableOpacity>
                  <View>
                    <Text>{decks[deck].title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}

export default Decks
