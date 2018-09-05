import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import GameCard from '../components/GameCard'


class RecommendedG extends React.Component {
    componentDidMount() {
        this.props.fetchRecommendedGames(this.props.steamId)
    }

    gamesMapper = (gamesArr) => {
        return gamesArr.map(game => <li>
            <GameCard game={game} />
        </li>)
    }

    render() {
        return (
            <div>
                <h2>Your Recommended Games</h2>
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

export default connect(null, actions)(RecommendedG);