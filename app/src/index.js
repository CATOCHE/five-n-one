import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'tachyons'
import App from './App'
import store from './store'
import { setStarwars } from './action-creators/starwars'
import { setBuzzwords } from './action-creators/buzzwords'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(setStarwars)
