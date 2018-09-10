import React from 'react';
import { connect } from 'react-redux';


const gamesObj = [
    {
        name: 'Rocket League',
        img_src: 'https://steamcdn-a.akamaihd.net/steam/apps/252950/header.jpg?t=1536280863',
        game_link: 'https://store.steampowered.com/app/252950/Rocket_League/'
    },
    {
        name: 'Dungeon Fighter Online',
        img_src: 'https://steamcdn-a.akamaihd.net/steam/apps/495910/header.jpg?t=1536038178',
        game_link: 'https://store.steampowered.com/app/495910/Dungeon_Fighter_Online/'
    },
    {
        name: 'Grand Theft Auto V',
        img_src: 'https://steamcdn-a.akamaihd.net/steam/apps/271590/header.jpg?t=1536096810',
        game_link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
    },
    {
        name: 'DRAGON QUEST® XI: Echoes of an Elusive Age',
        img_src: 'https://steamcdn-a.akamaihd.net/steam/apps/742120/header.jpg?t=1536077216',
        game_link: 'https://store.steampowered.com/app/742120/DRAGON_QUEST_XI_Echoes_of_an_Elusive_Age__Digital_Edition_of_Light/'
    },
    {
        name: 'MONSTER HUNTER: WORLD',
        img_src: 'https://steamcdn-a.akamaihd.net/steam/apps/582010/header.jpg?t=1536192380',
        game_link: 'https://store.steampowered.com/app/582010/MONSTER_HUNTER_WORLD/'
    }
];


class GamesOwned extends React.Component {
    
    gamesMapper = () => {
        return gamesObj.map(game => <div className="card text-center" style={{ width: "30rem" }}>
            <div className="card-body">
                <img className="card-img-top" src={game.img_src} alt={game.name} style={{ maxWidth: '100%' }} />

                <h4 className="card-title">{game.name}</h4>

                <a href={game.game_link} className="btn btn-primary" rel="noopener noreferrer" target="_blank"  >View on Steam</a>
            </div>
        </div>)
    }

    render(){

        return (



            <div style={{ float: "right", marginLeft: "2%" }} className="col-sm-5" >


                    <h3>Your Owned Games</h3>

                    {this.props.auth.username !== 'alex3aries' ? <h4>No owned games.</h4> : this.gamesMapper()}

 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(GamesOwned);