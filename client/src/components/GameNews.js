import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SteamAPI from 'steamapi';
import { STEAM_API_KEY } from '../clientConfig/keys';


const steam = new SteamAPI(STEAM_API_KEY);

class GameNews extends React.Component {
    state = {
        gameData: []
    }

    componentDidMount() {
        this.props.fetchUser();

        steam.getGameNews(`${this.props.gameId}`)
            .then(res => this.setState({
                gameData: res
            }))
    }

    gameDataMapper = () => {
        if (this.state.gameData) {
            return this.state.gameData.map(news => <React.Fragment key={news.gid}>

                <div className="card" style={{ width: "30rem" }}>
                    <div className="card-body">
                        <h4 className="card-title">{news.title}</h4>
                        {/* Parser({news.contents}) */}
                        {/* <p className="card-text" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{`${news.contents}`}</p> */}
                        
                        <a href={news.url} className="card-link" target="_blank">View Article</a>

                    </div>
                </div>
            </React.Fragment>)
        }
    }

    noOwned = () => {
        return (
            <div className="card">
                <div className="card-body">
                    No owned games
                    </div>
            </div>
        )
    }

    render() {
        console.log(this.state.gameData)
        
        return (
            <div>
                <h3>Owned Games News:</h3>
                { this.props.auth && this.props.auth.username === 'alex3aries' ? this.gameDataMapper() : this.noOwned()}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(GameNews);