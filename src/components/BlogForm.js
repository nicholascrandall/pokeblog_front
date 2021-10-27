import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class BlogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault()

        const url = this.props.baseURL + '/blog'

        const blog = {
            name: this.state.name,
            about: this.state.about,
            caughtPokemon: this.state.caughtPokemon
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({FormData: this.state.FormData}),
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            credentials: "include"
        }).then(response => response.json())
        .then(data => {
            this.setState({
                created: true
            })
        })
    }

    render() {
        console.log(this.state)
        if (this.state.created) {
            return <Redirect to='/' />
        }
        return (
            <div className="blogForm">
                <h3>Blog form page</h3>
            </div>
        )
    }

}