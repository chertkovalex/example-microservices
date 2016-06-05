import api from 'client-api'

export const API_SEARCH_REQUEST = 'API_SEARCH_REQUEST'
export const API_SEARCH_FAILURE = 'API_SEARCH_FAILURE'
export const API_SEARCH_SUCCESS = 'API_SEARCH_SUCCESS'
export const API_SEARCH_RECEIVE = 'API_SEARCH_RECEIVE'

export function requestSearch(params) {
  return {
    type: API_SEARCH_REQUEST,
    params
  }
}

export function receiveSearch(params, json) {
  return {
    type: API_SEARCH_RECEIVE,
    params,
    list: json,
    receivedAt: Date.now()
  }
}

export function fetchSearch(params) {
  return function (dispatch) {
    dispatch(requestSearch(params))
    return api.search(params)
      .then(response => response.ok ? response.json() : [])
      .then(json => dispatch(receiveSearch(params, json)))
  }
}