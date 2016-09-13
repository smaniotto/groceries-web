import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {browserHistory} from 'react-router'

import reducers from './reducers'
import Routes from './routes'


// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
)

const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
