import {
  SET_TOKEN, EXPIRED_TOKEN
} from './types'

const setToken = token => ({ type: SET_TOKEN, token })

const expiredToken = () => {
  return function (dispatch) {
    const action = { type: EXPIRED_TOKEN }
    dispatch(action)
  }
}

export { setToken, expiredToken }
