import { FETCH_FEATURED_GAMES } from '../actions/types';

export default function (state = [], action) {

    // console.log(action.payload)

    switch (action.type) {
        case FETCH_FEATURED_GAMES:
            return action.payload;
        default:
            return state;
    }
}