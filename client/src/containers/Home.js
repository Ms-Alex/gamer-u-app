import React from 'react';
// import { connect } from 'react-redux';

// import RecommendedGames from '../components/RecommendedG';
import RecentlyPlayed from '../components/RecentlyPlayed';
import FeaturedGames from '../components/FeaturedGames';
import InGameUsers from '../components/InGameUsers';
import Conversations from '../components/Conversations';

const Home = (props) => {
    

    return (

        <div className="container">

            <div>
                <FeaturedGames />
            </div>

            <div className="row">

            </div>


            <div style={{ float: "left" }} className="col-sm-5">
                <InGameUsers />
                <Conversations />
            </div>

            <div style={{ float: "right", marginLeft: "2%" }} className="col-sm-5">
                <RecentlyPlayed />
            </div>

        </div>
    )
};


export default (Home);