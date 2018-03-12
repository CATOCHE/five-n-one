import fetch from 'isomorphic-fetch'

import { SET_STARWARS, CHG_CURRENT_STARWARS, SET_ERROR_MSG } from '../constants'

const url = 'http://localhost:5000/starwars'

export const setStarwars = async (dispatch, getState) => {
  const starwars = await fetch(url).then(res => res.json())
  dispatch({ type: SET_STARWARS, payload: starwars })
}

export const addStarwarsName = (starwars, history) => async (
  dispatch,
  getState
) => {
  const headers = { 'Content-Type': 'application/json' }
  const url = 'http://localhost:5000/starwars'
  const method = 'POST'

  const body = JSON.stringify(starwars)

  const result = await fetch(url, { headers, method, body })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: SET_ERROR_MSG,
        payload: 'Error adding Starwars Character to the database'
      })
    )

  if (result.ok) {
    dispatch(setStarwars)
    history.push('/starwars')
  } else {
    console.log('Error adding Starwars Character')
  }
}

export const chgStarwars = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_STARWARS, payload: { [field]: value } })
}
