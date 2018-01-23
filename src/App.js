/* eslint-disable react/prefer-stateless-function, react/no-multi-comp, no-unused-expressions */

import React, { Component } from 'react'
import logo from './logo.svg'
import spinner from './spinner.svg'
import './App.css'

class Fetch extends Component  {
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
      .then(data => {
        this.setState({
          data,
          loading: false
        })
      })
  }

  render() {
    const { loading, data } = this.state

    return loading ? (
        <img src={spinner} width={120} height={120} alt="spinner" />
      ) : (
        this.props.children(data)
      )
  }
}

class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Fetch url='http://api.github.com/users/judytuna'>
            {data =>
              (<div>
                <h1>User: {data.login}</h1>
                <h2>Followers: {data.followers}</h2>
                <div>
                  <Fetch url={data.followers_url}>
                    {(followers) => {
                      return (
                        <div style={{margin:'auto', width:'400px'}}>
                          {followers.map((item) => (
                            <img
                              src={item.avatar_url}
                              width={80}
                              height={80}
                              key={item.login}
                            />
                          ))
                          }
                        </div>
                      )
                    }}
                  </Fetch>
                </div>
              </div>)
            }
          </Fetch>
        </div>
      </div>
    )
  }
}

export default App
