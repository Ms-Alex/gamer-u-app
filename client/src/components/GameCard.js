import React from 'react';

class GameCard extends React.Component {

    render() {

        return (
            <div>
                <h5>{this.props.game.name}</h5>
                <img src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${this.props.game.appid}/${this.props.game.img_logo_url}.jpg`} alt={this.props.game.name} />
            </div>
        )
    }
}

export default GameCard;
