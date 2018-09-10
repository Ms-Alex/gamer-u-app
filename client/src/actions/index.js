import axios from 'axios';
import { FETCH_USER, FETCH_RECENTLY_PLAYED, FETCH_FEATURED_GAMES, FETCH_ALL_USERS } from './types';
import { STEAM_API_KEY } from '../clientConfig/keys'

const SteamAPI = require('steamapi');
// const steam = new SteamAPI(STEAM_API_KEY);

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
}

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
    const steam = new SteamAPI(STEAM_API_KEY);

    return async dispatch => {
        await steam.getFeaturedGames().then((featGames) => dispatch({ type: FETCH_FEATURED_GAMES, payload: featGames.featured_win }) )
        
    }
}

export const fetchRecommendedGames = (userSteamId) => {
//     return async (dispatch) => {
//         const res = await axios.get(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${userSteamId}&count=5&format=json`);

//         dispatch({ type: FETCH_RECENTLY_PLAYED, payload: res.data.response.games });
//     }
// }

// export const fetchOwnedGames = () => {
//     const steam = new SteamAPI(STEAM_API_KEY);

//     return async (dispatch) => {
//         const userRes = await axios.get('/api/current_user');
//         console.log(userRes.data.steamId)

//         let themGames = await steam.getUserOwnedGames(`${userRes.data.steamId}`);
        
//         console.log(themGames);

//         let gamesData = themGames.map( async game => {
//             return await steam.getGameDetails(`${game.appid}`)
//         })

//         // Promise.resolve(steam.getGameSchema('11610')).then(console.log)


//         console.log(gamesData)

//         steam.getFeaturedGames().then(console.log)

//     }
        
}


