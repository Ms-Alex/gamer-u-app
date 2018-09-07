import axios from 'axios';
import { FETCH_USER, FETCH_RECENTLY_PLAYED } from './types';
import { STEAM_API_KEY } from '../clientConfig/keys'

const SteamAPI = require('steamapi');
const steam = new SteamAPI(STEAM_API_KEY);

// ACTION CREATORS
export const fetchUser = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
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

// export const fetchRecommendedGames = (userSteamId) => {
//     return async (dispatch) => {
//         const res = await axios.get(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${userSteamId}&count=5&format=json`);

//         dispatch({ type: FETCH_RECENTLY_PLAYED, payload: res.data.response.games });
//     }
// }

export const fetchOwnedGames = () => {
    return async (dispatch) => {
        const userRes = await axios.get('/api/current_user');
        console.log(userRes.data.steamId)

        let themGames = await steam.getUserOwnedGames(`${userRes.data.steamId}`);
        
        console.log(themGames);

        let gamesData = themGames.map( async game => {
            return await steam.getGameDetails(`${game.appid}`)
        })

        // Promise.resolve(steam.getGameSchema('11610')).then(console.log)


        console.log(gamesData)

        steam.getFeaturedGames().then(console.log)



        // Promise.all(gamesData).then(res => console.log(res));
        // .then(res => dispatch({ type: FETCH_OWNED_GAMES, payload: res }))




        // const res = await axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_API_KEY}&steamid=${userRes.data.steamId}&format=json`);

        // console.log(res.data.response.games)

        // if (res.data.response.games.length !== 0) {
            // let gamesArr = [];
            // res.data.response.games.forEach( game => {
            //     console.log(game.appid)
            //     fetch(`http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${STEAM_API_KEY}&appid=${game.appid}&format=json`).then( res => res.json()).then(obj => gamesArr = [...gamesArr, obj])

            //     // console.log(gamesArr)               
            // })
            // let gamesArr = res.data.response.games.map( async (game) => {
                // async (game) => {
                    // const gameData = 
                // let data = await axios.get(`http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${STEAM_API_KEY}&appid=${game.appid}`);


                // return data.data.gameName
                    // .data[`${game.appid}`].data;
                // return gameData.data[`${game.appid}`].data 
                // }
            // })

            // Promise.all(gamesArr).then(res => dispatch({ type: FETCH_OWNED_GAMES, payload: res }))
            // console.log(Promise.all(gamesArr))

            // dispatch({ type: FETCH_OWNED_GAMES, payload: hope });
        // } else {

        //     dispatch({ type: FETCH_OWNED_GAMES, payload: [] });
        // }

    }
        
}


