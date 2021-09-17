import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchImage } from '../store/actions/actions.js';

const PhotoCard = props => {
    useEffect(() => {
        props.fetchImage();
    }, []);

    return (
        <div>
            <h1>NASA APOD</h1>
            {props.isFetching && (
                <p>Hol up!</p>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.image);
    return {
        image: state.image
    }
}

export default connect(
    mapStateToProps,
    { fetchImage }
)(PhotoCard);