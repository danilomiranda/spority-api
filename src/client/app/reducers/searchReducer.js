import { SEARCH_ERROR, SEARCH_SUCCESS, LOADING } from '../actions/types'

const INITIAL_STATE = {
  error: false,
  loading: false,
  albums: [],
  query: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true }
    case SEARCH_SUCCESS:
      return {
        ...state,
        error: '',
        albums: action.payload.albums,
        query: action.query,
        loading: false
      }
    case SEARCH_ERROR:
      return { ...state, error: action.payload.response.data.error, loading: false }
    default:
      return state
  }
}
