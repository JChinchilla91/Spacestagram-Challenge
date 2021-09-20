import { 
    FETCH_IMAGE_START,
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_FAILURE,
    ADD_COMMENT,
    UPDATE_LIKE

} from "../actions/actions.js"

const initialState = {
    isFetching: true,
    isSuccessful: false,
    image: null,
    liked: false,
    comments: [],
    error: ''
}


export const AppReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case FETCH_IMAGE_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_IMAGE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                image: action.payload

            };
        case FETCH_IMAGE_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }

        case UPDATE_LIKE:
            return {
                ...state,
                liked: !state.liked
            }
        default:
            return state;
    }
}