import { FETCH_FEATURED_GAMES } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_FEATURED_GAMES:
            return action.payload;
        default:
            return state;
    }
}