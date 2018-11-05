import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import GameCard from '../components/GameCard';


class RecentlyPlayed extends React.Component {

    componentDidMount() {
        this.props.fetchRecentlyPlayed();
    }

    gamesMapper = (gamesArr) => {
        return gamesArr.map(game => (
          <GameCard game={game} key={game.steam_appid} />
        ));
    }

    noGames = () => {
        return (
            <div className="card">
                <div className="card-body">
                    No recent games
                    </div>
            </div>
        )
    }

    render() {
        console.log(this.props.recentGames)

        return (
            <div>
                <h3>Your Recently Played Games</h3>
                {/* <ul> */}
                    {this.props.games.length !== 0 ? this.gamesMapper(this.props.games) : this.noGames()}
                {/* </ul> */}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        recentGames: state.recentGames
    }
}

export default connect(mapStateToProps, actions)(RecentlyPlayed);