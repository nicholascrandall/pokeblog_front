import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class CommentActions extends Component {
    constructor(props) {
        super(props);
        this.state={
            deleted: false,
            edited: false
        }
    }

    deleteComment = (comment) => {
        const url = this.props.baseURL + '/comment/' + comment._id
        fetch(url,{
            method: 'DELETE',
            mode: 'cors',
            credentials: 'include'
        }).then(response => response.json())
        .then(data => {
            this.props.deletedComment()
        })
    }

    edited = () => {
        this.setState({edited: true})
    }

    render() {
        console.log(this.state)
        if (this.state.edited) {
            return <Redirect to='/edit'/>
        }
        return (
            <div>
                <button type="button" onClick={() => {
                    this.edited()
                    this.props.setComment(this.props.currentComment) 
                }}
            >Edit</button>
                <button type="button" onClick={ () => this.deleteComment(this.props.currentComment)}>Delete</button>
            </div>
        )
    }

}