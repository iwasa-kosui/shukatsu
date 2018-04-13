import React, { Component } from 'react'
import './index.css'
import PaneList from '../../containers/PaneList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>就活生神経衰弱</h1>
        <PaneList />
      </div>
    )
  }
}

export default App
