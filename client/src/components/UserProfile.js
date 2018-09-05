import React from 'react';
import GameCard from './GameCard'

class UserProfile extends React.Component {

    // gamesMapper = (gamesArr) => {
    //     return gamesArr.map(game => <li>
    //         <GameCard game={game} />
    //     </li>)
    // }

    render() {
        return (
            <div>
                <ul>
                    {this.gamesMapper()}
                </ul>

            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return { 
//         auth: state.auth, 
//         recommendedGames: state.recommendedGames
//     }
// }

export default connect()(UserProfile);