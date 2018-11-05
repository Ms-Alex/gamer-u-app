import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recentsReducer from './recentsReducer';
import ownedReducer from './ownedReducer';
import featuredReducer from './featuredReducer';
import allUsersReducer from './allUsersReducer';
import friendsReducer from './friendsReducer';

export default combineReducers({
    auth: authReducer,
    recentGames: recentsReducer,
    ownedGames: ownedReducer,
    featGames: featuredReducer,
    allUsers: allUsersReducer,
    friends: friendsReducer
});