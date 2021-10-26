import React, { Component } from 'react';
import avatar from "../images/Pikachu-color-model-publicity-cel.jpg"

export default class BlogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="blogcard">
                <h3>{this.props.blog.name}'s Blog</h3>
                <img src={avatar} alt="avatar" />
            </div>
        )
    }

}