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

    return (
      <KeyboardAvoidingView behavior="padding">
        <Text>
          What is the title of your new deck?
        </Text>
        <View>
          <TextInput
            onChangeText={inputText => this.setState({ inputText })}
            value={inputText}
            placeholder={'Enter title'}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default NewDeck
