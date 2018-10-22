import React from 'react';

class GameCard extends React.Component {

    render() {

        return (
            <div className="card text-center" style={{ width: "30rem" }}>
                <div className="card-body">
                    <img className="card-img-top" src={this.props.game.header_image} alt={this.props.game.name} style={{ maxWidth: '100%' }} />

                    <h4 className="card-title">{this.props.game.name}</h4>

                    <a href={this.props.game.website} className="btn btn-primary" rel="noopener noreferrer" target="_blank"  >View Game Site</a>
                </div>
            </div>
        )
    }
}

export default GameCard;
