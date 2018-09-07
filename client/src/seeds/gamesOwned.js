import React from 'react';

const GamesOwned = () => {
    return (
        <div>
            <h3>Your Owned Games</h3>

            <div className="card text-center" style={{width: "25rem"}}>
                <div className="card-body">
                    <img className="card-img-top" src='https://steamcdn-a.akamaihd.net/steam/apps/252950/header.jpg?t=1536280863' alt="Rocket League" style={{ maxWidth: '100%' }} /> 

                    <h4 className="card-title">Rocket League</h4>

                    <a href="https://store.steampowered.com/app/252950/Rocket_League/" className="btn btn-primary" rel="noopener noreferrer" target="_blank"  >View on Steam</a>
                </div>
            </div>

            {/* <div>
                <img src='https://steamcdn-a.akamaihd.net/steam/apps/252950/header.jpg?t=1536280863' alt="Rocket League" style={{ maxWidth: '20%'}} />
                <h5>Rocket League</h5>

                <a href="https://store.steampowered.com/app/252950/Rocket_League/" rel="noopener noreferrer" target="_blank" ><button>View on Steam</button></a>
            </div> */}

            <div>
                <img src='https://steamcdn-a.akamaihd.net/steam/apps/495910/header.jpg?t=1536038178' alt="Dungeon Fighter Online" style={{ maxWidth: '20%' }} />
                <h5>Dungeon Fighter Online</h5>

                <a href="https://store.steampowered.com/app/495910/Dungeon_Fighter_Online/" rel="noopener noreferrer" target="_blank" ><button>View on Steam</button></a>
            </div>

            <div>
                <img src='https://steamcdn-a.akamaihd.net/steam/apps/271590/header.jpg?t=1536096810' alt="GTA V" style={{ maxWidth: '20%' }} />
                <h5>Grand Theft Auto V</h5>

                <a href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/" rel="noopener noreferrer" target="_blank" ><button>View on Steam</button></a>
            </div>

            <div>
                <img src='https://steamcdn-a.akamaihd.net/steam/apps/742120/header.jpg?t=1536077216' alt="Dragon Quest XI" style={{ maxWidth: '20%' }} />
                <h5>DRAGON QUEST® XI: Echoes of an Elusive Age</h5>

                <a href="https://store.steampowered.com/app/742120/DRAGON_QUEST_XI_Echoes_of_an_Elusive_Age__Digital_Edition_of_Light/" rel="noopener noreferrer" target="_blank" ><button>View on Steam</button></a>
            </div>

            <div>
                <img src='https://steamcdn-a.akamaihd.net/steam/apps/582010/header.jpg?t=1536192380' alt="Monster Hunter World" style={{ maxWidth: '20%' }} />
                <h5>MONSTER HUNTER: WORLD</h5>

                <a href="https://store.steampowered.com/app/582010/MONSTER_HUNTER_WORLD/" rel="noopener noreferrer" target="_blank" ><button>View on Steam</button></a>
            </div>
    
        </div>
    )
}

export default GamesOwned;