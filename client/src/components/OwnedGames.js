import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import GameCard from '../components/GameCard';

class OwnedGames extends React.Component {

    // componentDidMount() {
    //     this.props.fetchOwned();
    // }


    gamesMapper = (gamesArr) => {
        return gamesArr.map(game => <GameCard game={game} /> )

        // return gamesArr.map(game => <div className="card text-center" style={{ width: "30rem" }}>
        //     <div className="card-body">
        //         <img className="card-img-top" src={game.header_image} alt={game.name} style={{ maxWidth: '100%' }} />

        //         <h4 className="card-title">{game.name}</h4>

        //         <a href={game.website} className="btn btn-primary" rel="noopener noreferrer" target="_blank"  >View Game Site</a>
        //     </div>
        // </div>)
 
    }

    renderGamesList = () => {
        return (
            <ul>
                {this.gamesMapper(this.props.games)}
            </ul>
        )
    }

    render() {
        // console.log('ownedGames: ', this.props.ownedGames);
        return (
            <div>
                <h3>Your Owned Games</h3>

                {this.props.games === [] ? "No owned games" : this.renderGamesList() }

            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        auth: state.auth,
        // ownedGames: state.ownedGames
    }
}


export default connect(mapStateToProps, actions)(OwnedGames);