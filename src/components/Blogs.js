import React, { Component } from 'react'
import BlogCard from './BlogCard'

export default class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    //fetching to the backend
    getBlog = () => {
        const url = this.props.baseURL + '/blog'

        fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include'
        }).then(response => response.json())
        .then(data => {
            this.setState({
                blogs: data.data
            })
        })
        .catch(err=> console.log(err))
    }

    componentDidMount() {
        this.getBlog()
    }

    render() {
        console.log(this.state)
        if (this.state.blogs) {
            return (
                <div className="blogs">
                    <h1>Blog list</h1>
                    {this.state.blogs.map(blog => 
                        <BlogCard
                        key={blog.id}
                        blog={blog}
                        />
                    )}
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>Fetching Blogs</h2>
                </div>
            )
        }
    }

}