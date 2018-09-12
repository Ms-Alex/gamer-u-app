import React from 'react';

import GamesOwned from '../seeds/gamesOwned';
import UserProHeader from '../components/UserProHeader';
import FriendsInProfile from '../components/FriendsInProfile'
// import { connect } from 'net';
import OwnedGames from '../components/OwnedGames'

const UserProfile = () => {

    return (
        <div className="container">
            <br />
            <UserProHeader />

            <div className="row">

                <FriendsInProfile />

                {/* FETCHED */}
                {/* <OwnedGames /> */}

                <GamesOwned />

            </div>
        </div>
    )
    
}


export default UserProfile;