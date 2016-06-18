import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

class App extends Component {
  componentWillMount() {
    const horizon = Horizon({ authType: 'token' })
    if (!horizon.hasAuthToken()) {
      horizon.authEndpoint('github').subscribe((endpoint) => {
          window.location.pathname = endpoint
          console.log(endpoint)
        })
    } else {
      console.log('authed!')
    }
  }

  render() {
    return (
      <div>
        Yo!
      </div>
    )
  }
}

class Home extends Component {
  // componentWillMount() {
  //   const horizon = Horizon({ authType: 'token' })
  //   if (!horizon.hasAuthToken()) {
  //     horizon.authEndpoint('github').subscribe((endpoint) => {
  //         // window.location.pathname = endpoint
  //         console.log(endpoint)
  //       })
  //   } else {
  //     console.log('authed!')
  //   }
  // }

  render() {
    return (
      <div>
        Home!
      </div>
    )
  }
}

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ App }/>
    <Route path="/home" component={ Home }/>
  </Router>
), document.getElementById('root'))
