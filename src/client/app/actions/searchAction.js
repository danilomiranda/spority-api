import { get } from '../lib/Http'
import {
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  LOADING
} from './types'

const search = query => {
  return function (dispatch) {
    dispatch({ type: LOADING })
    const params = {
      q: query.replace(' ', '+'),
      type: 'album'
    }
    get('/search', params).then(response => {
      console.log(response)
      dispatch({ type: SEARCH_SUCCESS, payload: response.data, query })
    })
      .catch((e) => {
        if (e.status === 401) {
          /* eslint-disable no-undef */
          localStorage.removeItem('token')
          /* eslint-enable no-undef */
        }
        console.log('ERROR = ', e)
        dispatch({ type: SEARCH_ERROR })
      })
  }
}

export { search }
