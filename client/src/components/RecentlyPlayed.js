import React from 'react';
import GameCard from '../components/GameCard';
import UUID from 'uuid';


class RecentlyPlayed extends React.Component {

    gamesMapper = (gamesArr) => {
        return gamesArr.map(game => (
          <GameCard game={game} key={UUID()} />
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

        return (
            <div>
                <h3>Your Recently Played Games</h3>
                    {this.props.games.length !== 0 ? this.gamesMapper(this.props.games) : this.noGames()}

            </div>
        )
    }
}

export default (RecentlyPlayed);