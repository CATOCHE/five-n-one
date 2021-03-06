import { SET_STARWARS, CHG_CURRENT_STARWARS } from '../constants'
import { merge } from 'ramda'

export const starWarsCharacters = (state = [], action) => {
  switch (action.type) {
    case SET_STARWARS:
      return action.payload
    default:
      return state
  }
}

export const currentStarwarsName = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_STARWARS:
      return merge(state, action.payload)
    default:
      return state
  }
}
