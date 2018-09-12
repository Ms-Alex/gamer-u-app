import { FETCH_FRIENDS } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_FRIENDS:
            return action.payload;
        default:
            return state;
    }
}