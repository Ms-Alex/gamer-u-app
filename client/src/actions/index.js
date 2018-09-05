import axios from 'axios';
import { FETCH_USER, FETCH_RECENTLY_PLAYED, FETCH_OWNED_GAMES } from './types';
import { STEAM_API_KEY } from '../clientConfig/keys'


// ACTION CREATORS
export const fetchUser = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
    }
};

export const fetchRecentlyPlayed = (userSteamId) => {
    return async (dispatch) => {
        const res = await axios.get(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${userSteamId}&count=5&format=json`);

        dispatch({ type: FETCH_RECENTLY_PLAYED, payload: res.response.games });
    }
}

// export const fetchRecommendedGames = (userSteamId) => {
//     return async (dispatch) => {
//         const res = await axios.get(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${userSteamId}&count=5&format=json`);

//         dispatch({ type: FETCH_RECENTLY_PLAYED, payload: res.response.games });
//     }
// }

export const fetchOwnedGames = (userSteamId) => {
    return async (dispatch) => {
        const res = await axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_API_KEY}&steamid=${userSteamId}&format=json`);

        dispatch({ type: FETCH_OWNED_GAMES, payload: res.response.games });
    }
}


