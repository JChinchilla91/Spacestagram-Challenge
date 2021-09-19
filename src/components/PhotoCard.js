import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchImage } from '../store/actions/actions.js';

const PhotoCard = props => {
    useEffect(() => {
        if ( !props.image )
        props.fetchImage();
    }, []);

    return (
        <div>
            {console.log('yo', props.image)}
            <h1>NASA APOD</h1>
            {props.isFetching ? (
                <p>Hol up!</p>
            ) : <p> yo!</p>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        image: state.image
    }
}

export default connect(
    mapStateToProps,
    { fetchImage }
)(PhotoCard);