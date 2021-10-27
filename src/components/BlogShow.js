import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import avatar from "../images/Pikachu-color-model-publicity-cel.jpg"
import { Comment, Header } from 'semantic-ui-react'
import CommentForm from './CommentForm'

export default class BlogShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    setOpen = (bool) => {
        this.setState({
            open: bool
        })
    }

    getComments() {
        const url = this.props.baseURL + '/comment/' + this.props.currentBlog._id
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                comments: data
            })
        })
    }

    addComment = (comment) => {
        const copyComments = [...this.state.comments]
        copyComments.push(comment)
        this.setState({
            comments: copyComments
        })
    }

    componentDidMount() {
        if (this.props.currentBlog) {
            this.getComments()
        }
    }

    render() {
        if(!this.props.currentBlog){
            return <Redirect to='/' />
        } else {
            console.log(this.state.comments)
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
                <Comment.Group className="comments" size='large'>
                    <Header as='h3' dividing>Comments</Header>
                    {this.state.comments.length === 0 &&
                        <Header>This Blog doesn't have any comments yet</Header>
                    }
                    {this.state.comments.map((comment, index) => {
                        const t = new Date(comment.time)
                        return <Comment key={index}>
                            <Comment.Content>
                                <Comment.Author as='a'>{comment.username}</Comment.Author>
                                <Comment.Metadata>
                                    <div>{t.toLocaleDateString() + ' ' + t.toLocaleTimeString()}</div>
                                </Comment.Metadata>
                                <Comment.Text>{comment.content}</Comment.Text>
                                </Comment.Content>
                        </Comment>
                    })}
                </Comment.Group>
            </div>
        )
    }
    }
}