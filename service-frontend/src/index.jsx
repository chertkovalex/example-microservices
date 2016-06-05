import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './containers/app'

import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/reducers'
import { fetchSearch } from './actions/actions'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { Provider } from 'react-redux'

let store = createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
)

window.s = store

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

function onSearch(query) {
  store.dispatch(fetchSearch({query}))
}


// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'))