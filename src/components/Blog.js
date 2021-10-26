import React, { Component } from 'react'

export default class Blog extends Component {
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
                blog: data
            })
        })
        .catch(err=> console.log(err))
    }

    componentDidMount() {
        this.getBlog()
    }

    render() {
        console.log(this.state)
        return (
            <div className="blog">
                <h4>Blog Show Page</h4>
            </div>
        )
    }

}