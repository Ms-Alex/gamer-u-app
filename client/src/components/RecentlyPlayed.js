import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import GameCard from '../components/GameCard';


class RecentlyPlayed extends React.Component {

    componentDidMount() {
        if(this.props.auth) {
            this.props.fetchRecentlyPlayed(this.props.auth.steamId);
        }

    }

    gamesMapper = (gamesArr) => {
        return gamesArr.map(game => <li>
            <GameCard game={game} />
        </li>)
    }

    render() {
        // console.log(this.props)

        return (
            <div>
                <h3>Your Recently Played Games</h3>
                <ul>
                    {this.props.recentGames === [] ? this.gamesMapper(this.props.recentGames) : "No recent games."}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        recentGames: state.recentGames
    }
}

export default connect(mapStateToProps, actions)(RecentlyPlayed);