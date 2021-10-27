import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="navBar">
                <Link to="/">
                    <h2>PokeBlog</h2>
                </Link>
            </div>
        )
    }

}