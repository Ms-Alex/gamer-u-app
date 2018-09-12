import axios from 'axios';
import { FETCH_USER, FETCH_RECENTLY_PLAYED, FETCH_FEATURED_GAMES, FETCH_ALL_USERS, FETCH_OWNED_GAMES, FETCH_PENDING_REQUESTS, FETCH_SENT_REQUESTS, FETCH_FRIENDS } from './types';
import { STEAM_API_KEY } from '../clientConfig/keys';

import SteamAPI from 'steamapi';
const steam = new SteamAPI(STEAM_API_KEY);

// ACTION CREATORS
export const fetchUser = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/current_user');
        const newRes = await axios.patch(`/api/users/${res.data._id}`, { inGame: true });

        dispatch({ type: FETCH_USER, payload: newRes.data })
    }
};

export const fetchAllUsers = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/current_user');
        const newRes = await axios.get('/api/users');
        const newArr = newRes.data.filter( user => user.steamId !== res.data.steamId )

        dispatch({ type: FETCH_ALL_USERS, payload: newArr })
    }
};

export const fetchRecentlyPlayed = () => {

    return async (dispatch) => {
        const userRes = await axios.get('/api/current_user');
        const res = await axios.get(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${userRes.data.steamId}&count=5&format=json`);

        if (res.data.response.games) {
            dispatch({ type: FETCH_RECENTLY_PLAYED, payload: res.data.response.games });          
        } else {
            dispatch({ type: FETCH_RECENTLY_PLAYED, payload: [] });            
        }
    }
};

export const fetchFeatured = () => {

    return async dispatch => {
        await steam.getFeaturedGames().then((featGames) => dispatch({ type: FETCH_FEATURED_GAMES, payload: featGames.featured_win }) )
        
    }
};

export const fetchOwned = () => {

    return async dispatch => {
        const userRes = await axios.get('/api/current_user');

        let gameData = []

        await steam.getUserOwnedGames(`${userRes.data.steamId}`)
            .then( async data => {
                await data.forEach( async game => {
                    await steam.getGameDetails(`${game.appid}`).then( data => gameData = [...gameData, data] )
                })
            }).then( () => dispatch({ type: FETCH_OWNED_GAMES, payload: gameData }) )
    }

};


export const fetchPending = () => {

    return async dispatch => {
        await axios.get('/api/relationships').then(res => {
            let pends = res.data.filter( relation => relation.status === 1 )
            dispatch({ type: FETCH_PENDING_REQUESTS, payload: pends } ) 
        })
    }

}

export const fetchFriends = (currentUserId) => {

    return async dispatch => {
        await axios.get('/api/relationships').then( res => {
            let friendPends = res.data.filter(relation => relation.status === 2) 
                // && (relation.userOne === currentUserId || relation.userTwo === currentUserId ))
            dispatch({ type: FETCH_FRIENDS, payload: friendPends }) 
            
        } )
    }

}




