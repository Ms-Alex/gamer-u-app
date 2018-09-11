import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// import RecommendedGames from '../components/RecommendedG';
import RecentlyPlayed from '../components/RecentlyPlayed';
import FeaturedGames from '../components/FeaturedGames';
import InGameUsers from '../components/InGameUsers';
import Conversations from '../components/Conversations';
import Chat from '../components/Chat';

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchFeatured();
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.allUsers !== prevProps.allUsers) {
            this.props.fetchAllUsers();
        }
    }

    render() {
        // this.props.fetchAllUsers();

        return (
            <div className="container">

                <div>
                    <FeaturedGames />
                </div>


                <div className="row">

                    <div className="col-6">
                        <Chat />

                    </div>

                </div>

                <div className="row">

                    <div style={{ float: "left" }} className="col-sm-5">
                        <InGameUsers />
                        <Conversations />
                    </div>

                    <div style={{ float: "right", marginLeft: "2%" }} className="col-sm-5">
                        <RecentlyPlayed />
                    </div>

                </div>
          

            </div>
        )
    }

};

function mapStateToProps(state) {
    return { allUsers: state.allUsers }
}


export default connect(mapStateToProps, actions)(Home);