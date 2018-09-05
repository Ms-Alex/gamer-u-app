import { FETCH_USER } from '../actions/types';

export default function (state = null, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false; //MAKE SURE NOT TO RETURN EMPTY STRING
        default:
            return state;
    }
}