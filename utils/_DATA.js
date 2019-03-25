/* Init data */
let decks = {
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

/* Helpers */
export function _getDecks() {
  return new Promise((res, rej) => {

  })
}

export function _getDeck({ id }) {
  return new Promise((res, rej) => {

  })
}

export function _saveDeckTitle({ title }) {
  return new Promise((res, rej) => {

  })
}

export function _addCardToDeck({ title, card }) {
  return new Promise((res, rej) => {

  })
}
