import { get } from '../lib/Http'
import {
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  LOADING,
  EXPIRED_TOKEN
} from './types'

const search = ({query, token}) => {
  return function (dispatch) {
    if (!query) {
      dispatch({ type: SEARCH_SUCCESS, payload: {}, query })
    }
    dispatch({ type: LOADING })
    const params = {
      q: query.replace(' ', '+'),
      type: 'album',
      token
    }
    get('/search', params).then(response => {
      dispatch({ type: SEARCH_SUCCESS, payload: response.data, query })
    })
      .catch((e) => {
        if (e.response.data.error.status === 401) {
          dispatch({ type: EXPIRED_TOKEN })
        }
        dispatch({ type: SEARCH_ERROR, payload: e })
      })
  }
}

export { search }
