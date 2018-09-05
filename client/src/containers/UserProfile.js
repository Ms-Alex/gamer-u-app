import React from 'react';

import OwnedGames from '../components/OwnedGames'

const UserProfile = () => {

    return (
        <div>
            <h2>Profile Page Header</h2>

            <div>
                <OwnedGames />

            </div>
        </div>
    )
    
}

export default (UserProfile);