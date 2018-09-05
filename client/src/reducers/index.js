import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recGamesReducer from './recGamesReducer';

export default combineReducers({
    auth: authReducer,
    recommendedGames: recGamesReducer,
});