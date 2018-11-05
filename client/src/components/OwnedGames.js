import React from 'react';
import GameCard from '../components/GameCard';


class OwnedGames extends React.Component {
    componentWillMount() {
        this.props.fetchOwned();
    }
    

  gamesMapper = gamesArr => {
      return gamesArr.map(game => <GameCard game={game} key={game.steam_appid} />);

  };

  renderGamesList = () => {
    return <ul>{this.gamesMapper(this.props.games)}</ul>;
  };

  noGames = () => {
    return (
      <div className="card">
        <div className="card-body">No owned games</div>
      </div>
    );
  };

  render() {

    return (
      <div>

        <h3>Your Owned Games</h3>

        {this.props.games.length === 0
          ? this.noGames()
          : this.renderGamesList()}
      </div>
    );
  }
};


export default OwnedGames;