import React, {Component} from 'react'
import {Router, Route} from 'react-router'

import HomePage from './pages/home'
import AuthPage from './pages/auth'


class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={HomePage} />
        <Route path="/auth" component={AuthPage} />
      </Router>
    )
  }
}


export default Routes
