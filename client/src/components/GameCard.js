import React from 'react';

class GameCard extends React.Component {

    render() {
        console.log(this.props.game)
        return (
            <div>
                <h3>{this.props.game.name}</h3>
                <img src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${this.props.game.appid}/${this.props.game.img_logo_url}.jpg`} />
            </div>
        )
    }
}

export default GameCard;
