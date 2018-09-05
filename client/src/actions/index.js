import axios from 'axios';
import { FETCH_USER, FETCH_RECOMMENDED_GAMES } from './types';
import { STEAM_API_KEY } from '../clientConfig/keys'

export const fetchUser = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
    }
};

export const fetchRecommendedGames = (userSteamId, count=6) => {
    return async (dispatch) => {
        const res = await axios.get(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${userSteamId}&count=5&format=json`);

        dispatch({ type: FETCH_RECOMMENDED_GAMES, payload: res.response.games });
    }
}

