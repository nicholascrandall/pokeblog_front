import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Blog from './components/Blog'

let baseURL = '' 
if (process.env.NODE_ENV === 'development'){
  baseURL = process.env.REACT_APP_LOCAL_URL
} else {
  baseURL = process.env.REACT_APP_PROD_URL
}

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
        <Blog baseURL={baseURL} />
      </div>
    )
  }
  
}



export default App;
