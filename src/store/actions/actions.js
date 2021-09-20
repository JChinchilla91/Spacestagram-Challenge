import axios from 'axios';

require('dotenv').config();

export const FETCH_IMAGE_START = 'FETCH_IMAGE_START';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE';
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_LIKE = 'UPDATE_LIKE'

export const fetchImage = () => {
    return dispatch => {
        dispatch({ type: FETCH_IMAGE_START });
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(res => 
                dispatch({ type: FETCH_IMAGE_SUCCESS, payload: res.data })
            )
            .catch(err =>
                dispatch({ type: FETCH_IMAGE_FAILURE, payload: `Error ${err}` })    
            )
    }
}   

export const addComment = comment => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}

export const updateLike = () => {
    return {
        type: UPDATE_LIKE
    }
}