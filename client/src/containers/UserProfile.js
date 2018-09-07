import React from 'react';

import GamesOwned from '../seeds/gamesOwned';
import UserProHeader from '../components/UserProHeader';
// import { connect } from 'net';
// import OwnedGames from '../components/OwnedGames'

const UserProfile = () => {

    return (
        <div className="container">
            <UserProHeader />

            <div>

                <GamesOwned />

            </div>
        </div>
    )
    
}


export default UserProfile;