import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class BlogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: "About Me"
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleCaughtChange = (event) => {
        this.setState({
            currentPokemon: event.target.value
        })
    }

    handleAddition = (event, { value }) => {
        this.setState((prevState) => ({
            caughtPokemon: [{ text: value, value }, ...prevState.caughtPokemon],
        }))
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
            body: JSON.stringify(blog),
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            credentials: "include"
        }).then(response => response.json())
        .then(data => {
            this.setState({
                created: true
            })
        }).catch (error => console.error({'Error': error}))
    }

    render() {
        console.log(this.state)
        if (this.state.created) {
            return <Redirect to='/' />
        }

        return (
            <div className="blogForm">
                <h3>Blog form page</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" onChange={(event)=>this.handleChange(event)} />
                    <br />

                    <input type="text" id="caughtPokemon" name="caughtPokemon" onChange={(event)=>this.handleCaughtChange(event)} placeholder="Add a caught pokemon to your list" />
                    <button>Add this Pokemon</button>
                    <br />
                    
                    <input type="submit" value="Submit" />

                    
                </form>
            </div>
        )
    }

}