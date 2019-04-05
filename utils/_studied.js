import { AsyncStorage } from "react-native"

export const STUDIED_STORAGE_KEY = 'mobile-flashcards:studied'

export function setStudied() {
  let studied = { studied: false }
  AsyncStorage.setItem(STUDIED_STORAGE_KEY, JSON.stringify(studied))
  return studied
}
