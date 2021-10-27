import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Blogs from './components/Blogs'
import BlogShow from './components/BlogShow'
import BlogForm from './components/BlogForm'
import EditForm from './components/EditForm'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

let baseURL = '' 
if (process.env.NODE_ENV === 'development'){
  baseURL = process.env.REACT_APP_LOCAL_URL
} else {
  baseURL = process.env.REACT_APP_PROD_URL
}
console.log(baseURL)

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

  setComment = (comment) => {
    this.setState({
      currentComment: comment
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* Comment Edit Page */}
            <Route path="/edit">
              <NavBar />
              <EditForm baseURL={baseURL} currentComment={this.state.currentComment} />
            </Route>

            {/* Blog Show page */}
            <Route path="/blog">
              <NavBar />
              <BlogShow baseURL={baseURL} currentBlog={this.state.currentBlog} setComment={this.setComment} currentComment={this.state.currentComment} />
            </Route>

            {/* Blog Form Page */}
            <Route path="/form">
              <NavBar />
              <BlogForm baseURL={baseURL} />
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
