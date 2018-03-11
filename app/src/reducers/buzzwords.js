import { SET_BUZZWORDS, ADD_BUZZWORD, CHG_CURRENT_BUZZWORD } from '../constants'
import { append, merge } from 'ramda'

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

export const currentBuzzword = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_BUZZWORD:
      return merge(state, action.payload)
    default:
      return state
  }
}
