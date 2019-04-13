import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { darkgreen } from '../utils/colors'

export default function HeaderView ({ headerText }) {
  return (
    <Text style={styles.text}>
      {headerText}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: darkgreen,
    fontSize: 30,
    padding: 30,
    textAlign: "center"
  }
})
