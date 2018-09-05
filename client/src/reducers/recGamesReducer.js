import { FETCH_RECOMMENDED_GAMES } from '../actions/types';

export default function (state = {}, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_RECOMMENDED_GAMES:
            return action.payload;
        default:
            return state;
    }
}