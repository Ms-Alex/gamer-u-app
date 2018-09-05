import React from 'react';
// import { connect } from 'react-redux';

// import RecommendedGames from '../components/RecommendedG';

import RecentlyPlayed from '../components/RecentlyPlayed';

const Home = (props) => {


    return (

        <div className="container">

            <div>
                {/* <RecommendedGames /> */}
            </div>

            <div>
                <RecentlyPlayed />
            </div>

        </div>
    )
};


export default (Home);