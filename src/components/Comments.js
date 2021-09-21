import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { addComment } from '../store/actions/actions';

import './assets/Comments.css';

const CommentsCard = props => {

    const [newComment, setNewComment] = useState({
        id: Date.now(),
        username: '',
        content: '',
        imgURL: '/user.png'
    })

    const dispatch = useDispatch();

    const handleChange = e => {  
        setNewComment({ ...newComment, [e.target.name]: e.target.value })
    }

    const submitForm = e => {
        e.preventDefault();

        const commentToAdd = {
            ...newComment
        };

        dispatch(addComment(commentToAdd))

        setNewComment({
            id: Date.now(),
            username: '',
            content: '',
            imgURL: '/user.png'
        })
    }

    return (
        <div className='comments-card-container'>
            <div className='title'>
                <h2 className='orangetext15'>Josh's Friends Comments</h2>
            </div>

                <form onSubmit={submitForm}>
                    <input
                      type='text'
                      name='username'
                      value={newComment.username}
                      placeholder='Enter username'
                      onChange={handleChange}
                    />

                    <textarea
                      type='text'
                      name='content'
                      value={newComment.content}
                      placeholder='Comment here'
                      onChange={handleChange}
                    />
                    {newComment.content && newComment.username ? (
                        <button type='submit'>Add Comment</button>
                    ) : <button disabled>Please add comment and/or username</button>}

                </form>
                <div className='comment-container'>
                    {props.comments.map(comment => {
                        return (
                            <div key={comment.id} className='comment'>
                                <a href='/'>{ comment.username } <img src={comment.imgURL} alt='User'/></a>
                                <p>{ comment.content }</p>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

export default connect(
    mapStateToProps,
    { addComment }
)(CommentsCard);