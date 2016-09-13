import React, {Component} from 'react'
import {Link} from 'react-router'


class HomePage extends Component {
  render() {
    return <Link to="/auth">Go to Auth</Link>
  }
}


export default HomePage
