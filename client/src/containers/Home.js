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

        return <div className="container">
            <div>
              <FeaturedGames featGames={this.props.featGames} />
            </div>

            <div className="row">
              <div className=" col-sm-10 col-lg-5" style={{ margin: "1%" }}>
                <InGameUsers />
                <br />
                {/* <Conversations /> */}

                <hr />
                <br />

                <Chat />
              </div>

                <div className=" col-sm-10 col-lg-5" style={{ margin: "1%" }}>
                <RecentlyPlayed games={this.props.recentGames} />

                <br />
                <br />
              </div>
            </div>
          </div>;
    }

};

function mapStateToProps(state) {
    return { 
        allUsers: state.allUsers,
        featGames: state.featGames,
        recentGames: state.recentGames
    }
}


export default connect(mapStateToProps, actions)(Home);