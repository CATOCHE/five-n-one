import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { setColors } from './action-creators/colors'
import { setCookies } from './action-creators/cookies'
import { setEmojis } from './action-creators/emojis'
import { setStarwars } from './action-creators/starwars'
import { setBuzzwords } from './action-creators/buzzwords'
import App from './App'
import 'tachyons'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(setColors)
store.dispatch(setCookies)
store.dispatch(setBuzzwords)
store.dispatch(setEmojis)
store.dispatch(setStarwars)
