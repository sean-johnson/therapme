import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App'
import Interface from './components/Interface'
import SessionEnd from './components/SessionEnd'
import Summary from './components/Summary'
import reducer from './reducer'

let store = createStore(
  reducer, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/play" component={Interface}/>
      <Route path="/end" component={SessionEnd}/>
      <Route path="/summary" component={Summary}/>
    </Router>
  </Provider>,
  document.getElementById('app')
)
