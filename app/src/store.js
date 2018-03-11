import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import { colors } from '../reducers/colors'
import { starWarsCharacters } from './reducers/starwars'
import { buzzwords, currentBuzzword } from './reducers/buzzwords'

export default createStore(
  combineReducers({ starWarsCharacters, buzzwords, currentBuzzword }),
  applyMiddleware(thunk)
)
