import axios from 'axios';
import { FETCH_USER, FETCH_RECENTLY_PLAYED, FETCH_FEATURED_GAMES, FETCH_ALL_USERS, FETCH_OWNED_GAMES, FETCH_PENDING_REQUESTS, FETCH_FRIENDS } from './types';
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

    return async dispatch => {
        const userRes = await axios.get('/api/current_user');

        // http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=XXXXXXXXXXXXXXXXX&steamid=76561197960434622&format=json
        await steam.getUserRecentGames(`${userRes.data.steamId}`)
            .then(async data => {
                // console.log('Data:', data);
                const recentsData = [];

                data.forEach(async game => {
                    let gameDetails = await steam.getGameDetails(`${game.appID}`);

                    recentsData.push(gameDetails);
                })
                // console.log('gameData Arr: ', recentsData)

                return recentsData;
            })
            .then(recentsData => dispatch({ type: FETCH_RECENTLY_PLAYED, payload: recentsData }))
    }
};

export const fetchFeatured = () => {

    return async dispatch => {

        // await steam.getFeaturedGames()
        await axios.get(`https://store.steampowered.com/api/featured`).then((featGames) => {
            // console.log("featGames", featGames.data.featured_win);
            dispatch({
              type: FETCH_FEATURED_GAMES,
              payload: featGames.data.featured_win
            });
        } )    
    }
};

export const fetchOwned = () => {
    // return async dispatch => {
    //     const userRes = await axios.get('/api/current_user');
    //     await axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_API_KEY}&steamid=${userRes.data.steamId}&format=json`)
    //       .then(data => {
    //         console.log("steam data", data);
    //         const ownedData = [];
    //         if (data.data.response.games) {
    //           data.data.response.games.forEach(async game => {
    //             let gameDetails = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${game.appid}`);
    //             console.log("steam gameDetails: ", gameDetails.data[game.appid].data);
    //             // console.log("steam gameDetails: ", gameDetails);

    //             if (gameDetails.data[game.appid].data) {
    //             //   ownedData.push(gameDetails.data[game.appid]);
    //             }
    //             return ownedData;
    //           });
    //         }
    //         console.log("owned Data", ownedData)
    //         return ownedData;
    //       })
    //       .then(ownedData =>
    //         dispatch({ type: FETCH_OWNED_GAMES, payload: ownedData })
    //       );
    // }


    return async dispatch => {
        const userRes = await axios.get('/api/current_user');

        await steam.getUserOwnedGames(`${userRes.data.steamId}`)
            .then(async data => {
                console.log(data);
                const ownedData = [];

                data.forEach(async game => {
                    let gameDetails = await steam.getGameDetails(`${game.appID}`);
                    console.log(gameDetails);

                    ownedData.push(gameDetails);
                })

                return ownedData;
            })
            .then(ownedData => dispatch({ type: FETCH_OWNED_GAMES, payload: ownedData }))
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




