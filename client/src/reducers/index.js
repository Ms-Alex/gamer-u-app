import { combineReducers } from 'redux';
import authReducer from './authReducer';
// import recGamesReducer from './recGamesReducer';
import recentsReducer from './recentsReducer';
import ownedReducer from './ownedReducer';
import featuredReducer from './featuredReducer';
import allUsersReducer from './allUsersReducer';
import pendingReducer from './pendingReducer';
import sentReducer from './sentReducer';
import friendsReducer from './friendsReducer';

export default combineReducers({
    auth: authReducer,
    recentGames: recentsReducer,
    ownedGames: ownedReducer,
    featGames: featuredReducer,
    allUsers: allUsersReducer,
    pending: pendingReducer,
    sent: sentReducer,
    friends: friendsReducer
});