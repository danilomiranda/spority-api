import { get } from '../lib/Http'
import {
  ALBUM_SUCCESS,
  ALBUM_ERROR,
  LOADING,
  EXPIRED_TOKEN
} from './types'

const loadAlbum = ({id, token}) => {
  console.log(id, token)
  return function (dispatch) {
    dispatch({ type: LOADING })
    const params = {
      token
    }
    get(`/albums/${id}`, params).then(response => {
      console.log(response.data)
      dispatch({ type: ALBUM_SUCCESS, payload: response.data })
    })
      .catch((e) => {
        console.log(e)
        if (e.response.data.error.status === 401) {
          dispatch({ type: EXPIRED_TOKEN })
        }
        dispatch({ type: ALBUM_ERROR, payload: e })
      })
  }
}

export { loadAlbum }
