import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import RecentlyPlayed from '../components/RecentlyPlayed';
import FeaturedGames from '../components/FeaturedGames';
import InGameUsers from '../components/InGameUsers';
// import Conversations from '../components/Conversations';
import Chat from '../components/Chat';


class Home extends React.Component {
    state = {
        gameRecents: ''
    }

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchAllUsers();
        this.props.fetchFeatured();
        this.props.fetchRecentlyPlayed();

    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.allUsers !== prevProps.allUsers) {
            this.props.fetchAllUsers();
        }
    }

    render() {

        return (
            <div className="container">

                <div>
                    <FeaturedGames />
                </div>

                <div className="row">

                    <div style={{ float: "left" }} className="col-sm-5">
                        <InGameUsers />
                        <br />
                        {/* <Conversations /> */}

                        <hr />
                        <br />

                        <Chat />

                    </div>

                    <div style={{ float: "right", marginLeft: "3%" }} className="col-sm-5">
                        <RecentlyPlayed games={this.props.recentGames} />

                        <br />
                        <br />

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
        recentGames: state.recentGames
    }
}


export default connect(mapStateToProps, actions)(Home);