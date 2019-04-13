import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { addQuestionToDeck } from '../utils/api'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'
import HeaderView from './HeaderView'
import { green, white, gray } from '../utils/colors'
import { NavigationActions } from 'react-navigation'

function SubmitBtn({ onPress, disabled }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={
        disabled
          ? { backgroundColor: gray }
          : styles.submitBtn
      }
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>ADD QUESTION</Text>
    </TouchableOpacity>
  );
}

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params;

    return {
      title: "New card"
    };
  };


  submit = () => {
    const { question, answer } = this.state;

    const deckId = this.props.deck.title;

    const q = {
      deckId,
      questionBody: { question, answer }
    };
    this.props.dispatch(addQuestion(q));

    this.setState(() => ({ question: "", answer: "" }));

    this.toDeck(deckId);

    addQuestionToDeck({
      deckId,
      questionBody: { question, answer }
    });
  };

  toDeck = key => {
    return this.props.navigation.navigate("Deck", {
      deckId: key
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderView headerText={"New Question"} />
        <View style={styles.stretch}>
          <TextInput
            style={styles.txtInput}
            placeholder="Question"
            placeholderTextColor={gray}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
          <TextInput
            style={styles.txtInput}
            placeholder="Answer"
            placeholderTextColor={gray}
             onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
        </View>
        <SubmitBtn
          onPress={this.submit}
          disabled={
            this.state.answer !== "" && this.state.question !== ""
              ? false
              : true
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  submitBtn: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  stretch: {
    flex: 1,
    alignItems: "stretch",
    marginLeft: 30,
    marginRight: 30,
    padding: 30
  },
  txtInput: {
    margin: 5,
    padding: 5,
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 5
  }
});

function mapStateToProps({ decks }, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deck: decks[deckId]
  };
}
export default connect(mapStateToProps)(AddCard);
