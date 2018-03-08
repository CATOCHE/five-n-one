import { SET_BUZZWORDS } from '../constants'

export const buzzwords = (state = [], action) => {
  switch (action.type) {
    case SET_BUZZWORDS:
      return action.payload
    case ADD_BUZZWORD:
      return append(action.payload, state)
    default:
      return state
  }
}
