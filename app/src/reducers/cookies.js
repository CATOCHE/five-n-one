import { SET_FORTUNE_COOKIES } from '../constants'

export const cookies = (state = [], action) => {
  switch (action.type) {
    case SET_FORTUNE_COOKIES:
      return action.payload
    default:
      return state
  }
}
