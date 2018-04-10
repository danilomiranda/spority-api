import {
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  LOADING
} from '../action/types'

const INITIAL_STATE = {
  erro: '',
  loading: false,
  authenticated: false,
  submitted: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true }
    case SEARCH_SUCCESS:
      return { ...state, error: '', authenticated: false, success: true, loading: false }
    case SEARCH_ERROR:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}
