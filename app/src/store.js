import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor } from './reducers/colors'
import { buzzwords, currentBuzzword } from './reducers/buzzwords'
import { cookies } from './reducers/cookies'
import { emojis } from './reducers/emojis'
import { starWarsCharacters } from './reducers/starwars'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    buzzwords,
    currentBuzzword,
    cookies,
    emojis,
    starWarsCharacters
  }),
  applyMiddleware(thunk)
)
