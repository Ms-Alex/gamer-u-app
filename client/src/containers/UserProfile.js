import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import GamesOwned from '../seeds/gamesOwned';
import UserProHeader from '../components/UserProHeader';
import FriendsInProfile from '../components/FriendsInProfile'
import OwnedGames from '../components/OwnedGames';

class UserProfile extends React.Component {
    
    componentDidMount(){
        this.props.fetchOwned();
    }

    render() {

        return (
            <div className="container">
                <br />
                <UserProHeader />

                <div className="row">

                    <FriendsInProfile />

                    {/* FETCHED */}
                    <OwnedGames games={this.props.ownedGames} />

                    {/* <GamesOwned /> */}

                </div>
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        ownedGames: state.ownedGames
    }
}


export default connect(mapStateToProps, actions) (UserProfile);