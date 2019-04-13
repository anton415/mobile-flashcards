import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { purple, white, green } from '../utils/colors'

export default function ActionButton({ onPress, label }) {
  return (
    <TouchableOpacity
      style={styles.submitBtn}
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
  }
})
