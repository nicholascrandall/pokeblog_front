import React, { Component } from 'react';
import avatar from "../images/Pikachu-color-model-publicity-cel.jpg"
import { Redirect } from 'react-router-dom'

export default class BlogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    setClicked = () => {
        this.setState({clicked: true})
    }

    render() {
        if (this.state.clicked) {
            return <Redirect to='/blog' />
        }

        return (
            <div className="blogcard" onClick={() => {this.setClicked() }}>
                <h2>{this.props.blog.name}'s PokeBlog</h2>
                <img src={avatar} alt="avatar" />
            </div>
        )
    }

}