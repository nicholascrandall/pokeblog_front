import React, { Component } from 'react'
import { Link, Redirect } from 'react'

export default class CommentActions extends Component {
    constructor(props) {
        super(props);
        this.state={
            deleted: false,
            open: false
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
            if(data.status === 200){
                this.setState({
                    deleted: true
                })
            }
        })
    }

    render() {
        if (this.state.deleted){
            return <Redirect to='/blog'/>
        }
        return (
            <div>
                <button>Edit</button>
                <button type="button" onClick={ () => this.deleteComment(this.props.currentComment)}>Delete</button>
            </div>
        )
    }

}