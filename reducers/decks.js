import { initData } from './initData'
import { ADD_DECK, ADD_CARD } from '../actions/types'

function decks(state = initData, action) {
  const { deck, title, card } = action

  switch (action.type) {
    case ADD_DECK: {
      let newState = state.slice()
      newState.push(deck)
      return newState
    }
    case ADD_CARD: {
      const index = state.findIndex(data => data.title === title)
      const deck = state.find(data => data.title === title)
      deck.questions.push(card)
      return [
        ...state.slice(0, index),
        deck,
        ...state.slice(index + 1)
      ]
    }
    default:
      return state
  }
}

export default decks
