import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Home Page</h1>
      </div>
    )
  }

}



export default App;
