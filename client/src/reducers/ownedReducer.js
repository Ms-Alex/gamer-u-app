import { FETCH_OWNED_GAMES} from '../actions/types';

export default function (state = [], action) {
    console.log(action.payload);
    switch (action.type) {
        case FETCH_OWNED_GAMES:
            return action.payload;
        default:
            return state;
    }
}