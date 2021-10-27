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
                    <h2 className="navItem">Home</h2>
                </Link>
                
                <Link to="/form">
                    <h2 className="navItem">Create your own PokeBlog!</h2>
                </Link>
            </div>
        )
    }

}