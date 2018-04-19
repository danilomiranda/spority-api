import { SET_TOKEN, EXPIRED_TOKEN } from '../actions/types'

const INITIAL_STATE = {
  token: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.token }
    case EXPIRED_TOKEN:
      return { ...state, token: '' }
    default:
      return state
  }
}
