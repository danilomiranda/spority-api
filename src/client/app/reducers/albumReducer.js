import { ALBUM_ERROR, ALBUM_SUCCESS, LOADING } from '../actions/types'

const INITIAL_STATE = {
  error: false,
  loading: false,
  album: {}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true }
    case ALBUM_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        error: '',
        album: action.payload,
        query: action.query,
        loading: false
      }
    case ALBUM_ERROR:
      return { ...state, error: action.payload.response.data.error, album: {}, loading: false }
    default:
      return state
  }
}
