/* global localStorage */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import reduxThunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers'
import Albums from './pages/albums'

class App extends React.Component {
  componentWillUnmount () {
    localStorage.removeItem('token')
  }
  render () {
    return <Albums />
  }
}

const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

const store = createStore(
  reducers,
  applyMiddleware(historyMiddleware, reduxThunk)
)
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)

module.hot.accept()
