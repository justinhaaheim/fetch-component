/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react'
import logo from './logo.svg'
import spinner from './spinner.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      user: null,
      followers: [],
    }
  }

  componentDidMount() {
    const url = 'https://api.github.com/users/prattsj'

    fetch(url)
      .then(response => response.json())
      .then((user) => {
        this.setState({ user, loading: false })
      })
  }

  render() {
    const { user } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          {
            user ? (
              <div>
                <h1>GitHub User: {user.login} </h1>
                <h2>Followers: {user.followers} </h2>
              </div>
            ) : (
              <img src={spinner} className="App-logo" alt="Loading..." height="120px" />
            )
          }
        </p>
      </div>
    )
  }
}

export default App
