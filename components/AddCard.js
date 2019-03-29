import React, { Component } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native'
import { saveDeckTitle } from '../utils/api'

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputQuestionText: '',
      inputAnswerText: ''
    }
  }

  createNewCard = () => {
    const title = ''
    const card = {}
    return addCardToDeck(title, card)
  }

  render() {
    const { inputQuestionText, inputAnswerText } = this.state

    submit = () => {
      console.log('submit')
      console.log('inputQuestionText: ', this.state.inputQuestionText)
      console.log('inputAnswerText: ', this.state.inputAnswerText)
    }

    return (
      <KeyboardAvoidingView behavior="padding">
        <View>
          <TextInput
            onChangeText={inputQuestionText => this.setState({ inputQuestionText })}
            value={inputQuestionText}
            placeholder={'Question'}
          />
          <TextInput
            onChangeText={inputAnswerText => this.setState({ inputAnswerText })}
            value={inputAnswerText}
            placeholder={'Answer'}
          />
          <Button
            onPress={submit}
            title="Submit"
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default AddCard
