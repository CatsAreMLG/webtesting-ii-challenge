import React, { Component } from 'react'
import Dashboard from './Dashboard/Dashboard'
import Display from './Display/Display'
import './App.css'

class App extends Component {
  state = {
    strike: false,
    ball: false,
    hit: false,
    foul: false,
    struckOut: false,
    walked: false,
    strikes: 0,
    balls: 0
  }
  handleReset = _ => {
    this.setState({
      strike: false,
      ball: false,
      hit: false,
      foul: false,
      struckOut: false,
      walked: false,
      strikes: 0,
      balls: 0
    })
  }
  handlePitch = name => {
    this.setState({ [name]: true })
    if (name === 'strike' && this.state.strikes < 2)
      this.setState(prevState => ({ strikes: prevState.strikes + 1 }))
    if (name === 'strike' && this.state.strikes === 2)
      this.setState({ strikes: 3, struckOut: true })
    if (name === 'ball' && this.state.balls < 3)
      this.setState(prevState => ({ balls: prevState.balls + 1 }))
    if (name === 'ball' && this.state.balls === 3)
      this.setState({ balls: 4, walked: true })
    if (name === 'foul' && this.state.strikes < 2)
      this.setState(prevState => ({ strikes: prevState.strikes + 1 }))
  }
  render() {
    return (
      <div className="App">
        <Dashboard
          handleReset={this.handleReset}
          handlePitch={this.handlePitch}
          score={this.state}
        />
        <Display score={this.state} />
      </div>
    )
  }
}

export default App
