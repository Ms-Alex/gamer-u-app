import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// import RecommendedGames from '../components/RecommendedG';
import RecentlyPlayed from '../components/RecentlyPlayed';
import GameNews from '../components/GameNews';
import FeaturedGames from '../components/FeaturedGames';
import InGameUsers from '../components/InGameUsers';
import Conversations from '../components/Conversations';
import Chat from '../components/Chat';

import { STEAM_API_KEY } from '../clientConfig/keys';

const SteamAPI = require('steamapi');
const steam = new SteamAPI(STEAM_API_KEY);

class Home extends React.Component {

    componentDidMount() {
        // return async () => {
            // await this.props.fetchAllUsers();
        //     await this.props.fetchFeatured();
        // }
        this.props.fetchAllUsers();
        this.props.fetchFeatured();
        // steam.getFeaturedGames(data => console.log('featGames: ', data))

        // steam.getAppList().then( data => console.log('applist: ', data))
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.allUsers !== prevProps.allUsers) {
            this.props.fetchAllUsers();
        }
    }

    render() {
        // this.props.fetchAllUsers();
        // console.log(this.props)

        return (
            <div className="container">

                <div>
                    <FeaturedGames />
                </div>


                <div className="row">

                    <div style={{ float: "left" }} className="col-sm-5">
                        <InGameUsers />
                        <br />
                        <br />
                        <Conversations />
                        <br />
                        <br />
                        <Chat />

                    </div>

                    <div style={{ float: "right", marginLeft: "3%" }} className="col-sm-5">
                        <RecentlyPlayed />

                        <br />
                        <br />

                        <GameNews gameId='742120' />

                    </div>

                   

                </div>
          

            </div>
        )
    }

};

function mapStateToProps(state) {
    return { 
        allUsers: state.allUsers,
        // featGames: state.featGames 
    }

}


export default connect(mapStateToProps, actions)(Home);