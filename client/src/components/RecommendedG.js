import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import GameCard from '../components/GameCard';


class RecommendedG extends React.Component {

    componentDidMount() {

            this.props.fetchRecommendedGames(this.props.auth.steamId);
    }

    gamesMapper = (gamesArr) => {
        return gamesArr.map(game => <li>
            <GameCard game={game} />
        </li>)
    }

    render() {
        console.log(this.props)

        return (
            <div>
                <h3>Your Recommended Games</h3>
                <ul>
                    {this.gamesMapper(this.props.recommendedGames)}
                </ul>                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        recommendedGames: state.recommendedGames
    }
}

export default connect(mapStateToProps, actions)(RecommendedG);