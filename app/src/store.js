import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import { colors } from '../reducers/colors'
import { starWarsCharacters } from './reducers/starwars'
import { buzzwords } from './reducers/buzzwords'

export default createStore(
  combineReducers({ starWarsCharacters, buzzwords }),
  applyMiddleware(thunk)
)
