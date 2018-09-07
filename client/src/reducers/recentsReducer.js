import { FETCH_RECENTLY_PLAYED } from '../actions/types';

export default function (state = [], action) {

    console.log(action.payload)
    
    switch (action.type) {
        case FETCH_RECENTLY_PLAYED:
            return action.payload;
        default:
            return state;
    }
}