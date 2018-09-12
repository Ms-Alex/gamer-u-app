import { FETCH_SENT_REQUESTS } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_SENT_REQUESTS:
            return action.payload;
        default:
            return state;
    }
}