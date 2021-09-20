import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './assets/PhotoCard.css'

import { fetchImage } from '../store/actions/actions.js';
import { updateLike } from '../store/actions/actions.js';

const PhotoCard = props => {
    useEffect(() => {
        if ( !props.image )
        props.fetchImage();
    }, []);

    return (
        <div className='photo-card-container'>
            <div className='title'>
                <h2 className='orangetext15'>NASA APOD</h2>
            </div>
            {console.log('yo', props.image)}
            {props.isFetching ? (
                <div className='photo-container'>
                    <img src='/globe-rotating.gif' alt='Rotating globe'/>
                </div>
            ) : 
                <div className='photo-container'>
                    <h2 className='orangetext15'>{props.image.title}:</h2>
                    <img src={props.image.hdurl} alt='NASA photo of the day' />
                    <div className='date-and-like-container'>
                        <p>{props.image.date}</p>
                        {props.liked ? (
                            <img onClick={() => props.updateLike()} src='/filledheart.png' alt='Filled Heart' />
                            
                        ) : <img onClick={() => props.updateLike()} src='/iconmonstr-heart-thin.png' alt='Heart' />}
                    </div>
                </div>
                }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        image: state.image,
        liked: state.liked
    }
}

export default connect(
    mapStateToProps,
    { fetchImage, updateLike }
)(PhotoCard);