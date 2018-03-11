import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors } from './reducers/colors'
import { cookies } from './reducers/cookies'
import { emojis } from './reducers/emojis'
import { starWarsCharacters } from './reducers/starwars'
import { buzzwords, currentBuzzword } from './reducers/buzzwords'

export default createStore(
  combineReducers({
    colors,
    cookies,
    emojis,
    starWarsCharacters,
    buzzwords,
    currentBuzzword
  }),
  applyMiddleware(thunk)
)
