import React, { useState } from 'react';
import { connect } from 'react-redux';

import './assets/Comments.css';

const CommentsCard = props => {

    return (
        <div className='comments-card-container'>
            <div className='title'>
                <h2 className='orangetext15'>Josh's Friends Comments</h2>

                {props.comments.map(comment => {
                    return (
                        <div className='comment'>
                            <a href='/'>{comment.username} <img src={comment.imgURL} alt='User'/></a>
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
    {  }
)(CommentsCard);