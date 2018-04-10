import axios from 'axios'

const ROOT_URL = 'https://api.spotify.com'

function getHeaders () {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8'
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return headers
}

export const get = (url, params) => {
  return axios({
    method: 'get',
    baseURL: `${ROOT_URL}/v1`,
    url: url,
    params: params,
    headers: getHeaders()
  })
}

export const post = (url, params) => {
  return axios({
    method: 'post',
    baseURL: `${ROOT_URL}/v1`,
    url: url,
    data: params,
    headers: getHeaders()
  })
}

export const put = (url, params) => {
  return axios({
    method: 'put',
    baseURL: `${ROOT_URL}/v1`,
    url: url,
    data: params,
    headers: getHeaders()
  })
}
