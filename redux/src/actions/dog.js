import axios from "axios";

export const FETCH_DOG_START = "FETCH_DOG_START"
export const FETCH_DOG_PASS = "FETCH_DOG_PASS"
export const FETCH_DOG_FAIL = "FETCH_DOG_FAIL"

export function fetchGoodBoi() {
    return dispatch => {
        dispatch({ type: FETCH_DOG_START });

        axios
            .get(`https://dog.ceo/api/breeds/image/random`)
            .then(res => {
                dispatch({ type: FETCH_DOG_PASS, payload: res.data.message })
            })
            .catch(err => {
                dispatch({ type: FETCH_DOG_FAIL, payload: err });
            })
    }
}