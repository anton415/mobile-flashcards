export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_DECK = "ADD_DECK"
export const STUDIED = "STUDIED"
export const ADD_QUESTION = "ADD_QUESTION"
export const REMOVE_DECK = "REMOVE_DECK"


export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function deleteDeck(deckId) {
  return {
    type: REMOVE_DECK,
    deckId
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}


export function setStudied(studied) {
  return {
    type: STUDIED,
    studied
  }
}
