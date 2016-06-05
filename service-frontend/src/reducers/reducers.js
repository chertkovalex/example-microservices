import { combineReducers } from 'redux'
import { API_SEARCH_REQUEST, API_SEARCH_RECEIVE } from '../actions/actions'


const initialState = {
  isFetching: false,
  list: []
}

function app(state = initialState, action) {
  switch (action.type) {
    case API_SEARCH_REQUEST:
      return Object.assign({}, state, { isFetching: true, list: [] })
    case API_SEARCH_RECEIVE:
      return { isFetching: false, list: action.list }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  app
})

export default rootReducer
