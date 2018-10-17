import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import GameCard from '../components/GameCard';

class OwnedGames extends React.Component {

    componentDidMount() {
        this.props.fetchOwned();

    }


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
                {/* {this.gamesMapper(this.props.ownedGames)} */}
            </ul>
        )
    }

    render() {
        console.log('ownedGames: ', this.props.ownedGames);
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
        ownedGames: state.ownedGames
    }
}


export default connect(mapStateToProps, actions)(OwnedGames);