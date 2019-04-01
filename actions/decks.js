import { ADD_DECK, ADD_CARD } from './types'

export const addDeck = (deck) => ({
  type: ADD_DECK,
  deck
})

export const addCard = (title, card) => ({
  type: ADD_CARD,
  title,
  card
})
