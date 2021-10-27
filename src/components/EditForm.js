import React, { Component } from 'react';
import {Form} from 'semantic-ui-react'

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.currentComment.content
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        const url = this.props.baseURL + '/comment/' + this.props.currentComment._id
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'},
            mode: 'cors', 
            credentials: 'include'
        }).then(response => response.json())
        .then(data => {
            if(data.status === 200) {
                this.props.editUserInfo(data);
            }
        })
    }
    
    render() {  
        return(
            <Form onSubmit={event =>this.handleSubmit(event)}>
                <Form.TextArea id='content' name='content' value={this.state.content} onChange={event =>this.handleChange(event)}/>
                <Form.Button type='submit' color='teal' fluid size='large' style={{marginTop:'20px'}} >
                    Submit Edits
                </Form.Button>
            </Form>
        )
    }
}