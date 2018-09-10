import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import GameCard from '../components/GameCard';

class OwnedGames extends React.Component {

    componentDidMount() {
        

    }

    // fetchGamesInfo = () => {
    //     return this.props.ownedGames.map(game => async (game) => {
    //         const res = await axios.get(`https://store.steampowered.com/api/appdetails/?appids=${game.appid}`);

    //         console.log(res[`${game.appid}`].data);

    //         return res[`${game.appid}`].data
    //     });
        
    // }

    gamesMapper = (gamesArr) => {
        return gamesArr.map(game => <li key={game.appid} >
            <div>
                <h5>{game.name}</h5>
                <img src={game.header_image} alt={game.name} />
            </div>
        </li>)
    }

    renderGamesList = () => {
        return (
            <ul>
                {this.gamesMapper(this.props.ownedGames)}
            </ul>
        )
    }

    render() {

        return (
            <div>
                <h3>Your Owned Games</h3>

                {/* <ul> */}
                    {/* {this.props.ownedGames === [] ? "No owned games" : this.renderGamesList() } */}
                {/* </ul> */}


            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        auth: state.auth,

    }
}


export default connect(mapStateToProps, actions)(OwnedGames);