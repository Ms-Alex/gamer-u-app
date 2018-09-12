import { FETCH_PENDING_REQUESTS } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_PENDING_REQUESTS:
            return action.payload;
        default:
            return state;
    }
}