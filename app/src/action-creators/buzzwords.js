import fetch from 'isomorphic-fetch'
import {
  SET_BUZZWORDS,
  CHG_CURRENT_BUZZWORD,
  SET_ERROR_MSG
} from '../constants'
const url = 'http://localhost:5000/buzzwords'

// Action-Creators always end up dispatching an ACTION
// with a type and a payload

export const setBuzzwords = async (dispatch, getState) => {
  const buzzwords = await fetch(url).then(res => res.json())
  dispatch({ type: SET_BUZZWORDS, payload: buzzwords })
}

export const addBuzzword = (buzzword, history) => async (
  dispatch,
  getState
) => {
  const headers = { 'Content-Type': 'application/json' }
  const url = 'http://localhost:5000/buzzwords'
  const method = 'POST'

  const body = JSON.stringify(buzzword)

  const result = await fetch(url, { headers, method, body })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: SET_ERROR_MSG,
        payload: 'Error adding buzzword to the database'
      })
    )

  if (result.ok) {
    dispatch(setBuzzwords)
    history.push('/buzzwords')
  } else {
    console.log('Error adding buzzword')
  }
}

export const chgBuzzword = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_BUZZWORD, payload: { [field]: value } })
}
