import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Blogs from './components/Blogs'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

  setBlog = (blog) => {
    this.setState({
      currentBlog: blog
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* Blog Show page */}
            <Route path="/blog">
              <NavBar />
              <h2>BLOG SHOW PAGE</h2>
            </Route>

            {/* Home Page - KEEP AT BOTTOM */}
            <Route path="/">
              <NavBar />
              <Blogs baseURL={baseURL} setBlog={this.setBlog} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
  
}

export default App;
