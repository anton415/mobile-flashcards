import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, Platform, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks, addDeck, setStudied } from '../actions'
import { getDailyReminderValue } from '../utils/helpers'
import { fetchDecks, fetchStudied } from '../utils/api'
import { white, purple, gray, lightPurp } from '../utils/colors'
import HeaderView from './HeaderView'
import DeckViewDetails from './DeckViewDetails'
import { AppLoading } from 'expo'

class Decks extends Component {
  state = {
    ready: false,
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    const { dispatch } = this.props;
    fetchDecks()
      .then(decks => dispatch(receiveDecks(JSON.parse(decks))))
      .then(() => fetchStudied())
      .then(studied => dispatch(setStudied(JSON.parse(studied))))
      .then(studied => {
        if (!studied) {
          return getDailyReminderValue();
        }
      })

      .then(() => this.setState({ ready: true }));
  }

  render() {
    const { studied, decks } = this.props;
    const { ready } = this.state;

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <ScrollView style={styles.container}>
        <HeaderView headerText={"Decks"} />
        <View>
          {decks && Object.keys(decks).length !== 0 ? (
            Object.keys(decks).map(key => {
              return decks[key] !== null ? (
                <TouchableOpacity
                  key={key}
                  style={styles.deck}
                  onPress={() => {
                    Animated.timing(this.state.opacity, {
                      toValue: 1,
                      duration: 1000
                    })
                    return this.props.navigation.navigate("Deck", {
                      deckId: key,

                    })
                  }}
                >
                  <DeckViewDetails
                    deckId={key}
                    questionsLength={decks[key].questions.length}
                  />
                </TouchableOpacity>
              ) : null;
            })
          ) : (
            <Text>Decks</Text>
          )}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: white
  },
  deck: {
    backgroundColor: white,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    shadowRadius: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1
    }
  }

})

function mapStateToProps(state) {
  const { decks, studied } = state

  return {
    decks,
    studied
  }
}

export default connect(mapStateToProps)(Decks)
