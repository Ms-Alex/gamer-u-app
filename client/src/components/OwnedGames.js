import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';
// import GameCard from '../components/GameCard';

class OwnedGames extends React.Component {
    state = {
        games: []
    }

    componentDidMount() {
        if (this.props.auth !== null) {
            this.props.fetchUser();

            this.props.fetchOwnedGames(this.props.auth.steamId).then(() => this.fetchGamesInfo())

        }
    }

    fetchGamesInfo = () => {
        let gameInfoArr = this.props.ownedGames.map(game => async (game) => {
            const res = await axios.get(`https://store.steampowered.com/api/appdetails/?appids=${game.appid}`);

            console.log(res[`${game.appid}`].data);
            return res[`${game.appid}`].data
        });
        console.log(gameInfoArr);
        this.setState(
            {
                games: gameInfoArr
            }
        )
    }

    gamesMapper = (gamesArr) => {
        return gamesArr.map(game => <li>
            <div>
                <h5>{game.name}</h5>
                <img src={game.header_image} alt={game.name} />
            </div>
        </li>)
    }

    render() {
        console.log(this.props.ownedGames);
        console.log(this.state.games);
        return (
            <div>
                <h3>Your Owned Games</h3>

                <ul>
                    {this.gamesMapper(this.state.games)}
                </ul>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        auth: state.auth,
        ownedGames: state.ownedGames
    }
}


export default connect(mapStateToProps, actions)(OwnedGames);