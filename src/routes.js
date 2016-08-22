import React, {Component} from 'react'
import {Router, Route} from 'react-router'

import Home from './pages/home'


class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={Home} />
      </Router>
    )
  }
}


export default Routes
