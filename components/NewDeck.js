import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import { saveDeckTitle } from '../utils/api';

class NewDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
  }

  createNewDeck = () => {
    return addNewDeckTitle(this.state.inputText)
  }



  render() {
    const { inputText } = this.state

    submit = () => {
      console.log('submit');
      console.log('input: ', this.state.inputText);
    }

    return (
      <KeyboardAvoidingView behavior="padding">
        <Text>
          What is the title of your new deck?
        </Text>
        <View>
          <TextInput
            onChangeText={inputText => this.setState({ inputText })}
            value={inputText}
            placeholder={'Deck Title'}
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

export default NewDeck
