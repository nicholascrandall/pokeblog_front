import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import avatar from "../images/Pikachu-color-model-publicity-cel.jpg"

export default class BlogShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    setOpen = (bool) => {
        this.setState({
            open: bool
        })
    }

    render() {
        if(!this.props.currentBlog){
            return <Redirect to='/' />
        } else {
            const capitalize = () => {
                const pokeList = this.props.currentBlog.caughtPokemon.join(', ');
                const words = pokeList.split(" ");

                for(let i = 0; i < words.length; i++) {
                    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
                }
                return words.join(" ")
            }
            
        return (
            <div className="blogshow">
                <h1>{this.props.currentBlog.name}'s PokeBlog</h1>
                <h3>{this.props.currentBlog.about}</h3>

                <img src={avatar} alt="avatar" />
                <h3>Pokemon I've caught so far: {capitalize()} </h3>
            </div>
        )
    }
    }
}