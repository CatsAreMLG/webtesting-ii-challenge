import React, { Component } from 'react'
import './App.css'

class App extends Component {
  handlePitch = name => {}
  render() {
    return (
      <div className="App">
        <Dashboard handlePitch={this.handlePitch} />
        <Display />
      </div>
    )
  }
}

export default App
