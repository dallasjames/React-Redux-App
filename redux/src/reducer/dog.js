import { FETCH_DOG_START, FETCH_DOG_PASS, FETCH_DOG_FAIL } from '../actions/dog';

const initialState = {
    dog: null,
    loading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DOG_START:
            return {
                ...state,
                loading: true 
            }
        case FETCH_DOG_PASS:
            return {
                ...state,
                dog: action.payload,
                loading: false
            }
        case FETCH_DOG_FAIL:
            return {
                ...state,
                dog: action.payload,
                loading: false
            }
        default:
            return state
    }
}