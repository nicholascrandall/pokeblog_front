import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Blogs from './components/Blogs'
import BlogShow from './components/BlogShow'
import BlogForm from './components/BlogForm'
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
              <BlogShow baseURL={baseURL} currentBlog={this.state.currentBlog} />
            </Route>

            {/* Blog Form Page */}
            <Route path="/form">
              <NavBar />
              <BlogForm />
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
