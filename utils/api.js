import { AsyncStorage } from 'react-native'

export const STORAGE_KEY = 'mobile-flashcards:decks'

let initData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function deckResults(results) {
  return results === null ? setInitData() : JSON.parse(results)
}

export function setInitData() {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initData))
  return initData
}

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(deckResults)
}

export function getDeck({ title }) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(deckResults)
    .then(results => results[title])
}

export function saveDeckTitle({ title }) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  )
}

export function addCardToDeck({ title, card }) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(data => {
      decks = JSON.parse(data)
      decks[title].questions.push(card)
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
    })
}
