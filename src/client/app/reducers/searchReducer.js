import { SEARCH_ERROR, SEARCH_SUCCESS, LOADING } from '../actions/types'

const INITIAL_STATE = {
  error: '',
  loading: false,
  albums: [],
  query: '',
  token: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true }
    case SEARCH_SUCCESS:
      console.log('reducer ->', action)
      return {
        ...state,
        error: '',
        albums: action.payload.albums,
        query: action.query,
        loading: false
      }
    case SEARCH_ERROR:
      return { ...state, error: action.payload, token: '', loading: false }
    default:
      return state
  }
}
