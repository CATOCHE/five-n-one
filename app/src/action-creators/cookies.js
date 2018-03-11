import fetch from 'isomorphic-fetch'
import { SET_FORTUNE_COOKIES } from '../constants'
const url = 'http://localhost:5000/fortune-cookies'

export const setCookies = async (dispatch, getState) => {
  const fortuneCookies = await fetch(url).then(res => res.json())
  dispatch({ type: SET_FORTUNE_COOKIES, payload: fortuneCookies })
}
