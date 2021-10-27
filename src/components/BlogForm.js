import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class BlogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: "About Me",
            currentPokemon: "",
            caughtPokemon: []
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

    handleAddition = (event) => {
        this.setState(prevState => ({
            caughtPokemon: [...prevState.caughtPokemon, event],
            currentPokemon: ""
          }))
      }

    handleSubmit = (event) => {
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
        if (this.state.created) {
            return <Redirect to='/' />
        }

        return (
            <div className="blogForm">
                <h3>Blog form page</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Your Name: </label>
                    <input type="text" id="name" name="name" onChange={(event)=>this.handleChange(event)} />
                    
                    <p>Pokemon caught so far: </p>
                    {this.state.caughtPokemon.length > 0 &&
                        <ul>
                            {this.state.caughtPokemon.map((pokemon, index) => {
                                return <li key={index}>{pokemon}</li>
                            })
                            }
                        </ul>
                    
                    }

                    <input type="text" value={this.state.currentPokemon} id="caughtPokemon" name="caughtPokemon" onChange={(event)=>this.handleCaughtChange(event)} placeholder="Pokemon Name" />
                    <button type="button" onClick={ () => this.handleAddition(this.state.currentPokemon)}>Add this Pokemon</button>

                    <input className="blogSubmit" type="submit" value="Create Your Blog!" />

                    
                </form>
            </div>
        )
    }

}