/* eslint-disable react/prefer-stateless-function, react/no-multi-comp, no-unused-expressions */

import React, { Component } from 'react'
import logo from './logo.svg'
import spinner from './spinner.svg'
import './App.css'

class Fetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      data: null,
    }
  }

  componentDidMount() {
    const { url } = this.props

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({ data, loading: false })
      })
  }

  render() {
    const { loading } = this.state

    return loading ? (
      <img src={spinner} alt="Loading..." height="60px" />
    ) : (
      this.props.children(this.state)
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    null
  }

  render() {
    const url = 'https://api.github.com/users/prattsj'

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <Fetch url={url}>
            {({ data: user }) => (
              <div>
                <h1>GitHub User: {user.login} </h1>
                <h2>Followers: {user.followers} </h2>
                <div className="image-grid">
                  <Fetch url={user.followers_url}>
                    {({ data: followers }) =>
                      followers.map((follower, i) => (
                        <img
                          src={follower.avatar_url}
                          height="80px"
                          width="80px"
                          key={follower.id}
                          alt="follower"
                        />
                      ))
                    }
                  </Fetch>
                </div>
              </div>
            )}
          </Fetch>
        </div>
      </div>
    )
  }
}

export default App
