import React from 'react';

import SteamAPI from 'steamapi';
import { STEAM_API_KEY } from '../clientConfig/keys';
import Parser from 'html-react-parser';


const steam = new SteamAPI(STEAM_API_KEY);

class GameNews extends React.Component {
    state = {
        gameData: []
    }

    componentDidMount() {
        // steam.getAppList().then(console.log);

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
                        <p className="card-text" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{`${news.contents}`}</p>
                        
                        <a href={news.url} className="card-link" target="_blank">View Article</a>

                    </div>
                </div>
            </React.Fragment>)
        }
    }

    render() {
        
        return (
            <div>
                <h3>Owned Games News:</h3>

                {this.gameDataMapper()}

            </div>
        )
    }
}

export default GameNews;