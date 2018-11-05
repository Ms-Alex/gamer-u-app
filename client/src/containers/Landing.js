import React from 'react';
import coolSteamButton from '../steam_cool_login.png';
import gameController from '../game_controller.png';


const Landing = (props) => {
    const gameControllers = () => {
        let res = []
        for(let i =0; i < 5; i ++) {
            res.push(<img src={gameController} alt="Game Controller" style={{ width: "10%", padding: "1%" }} />);
        }
        return res;
    }

    return (
        <div className="container" style={{ textAlign: 'center' }}> 
            <h2 className="title">Welcome to GamerU</h2>
            <h4 className="title" >
                A social network for Steam gamers.
                To get started, please login through your Steam account.
            </h4>
            
            <a href="/auth/steam">
                <img src={coolSteamButton} alt="Steam Logo" style={{ height: "8em" , verticalAlign: 'middle' }} />
                {/* <p>Click for Steam Login</p> */}
            </a> 
            <br />
            <br />
            
            {gameControllers()}
            
        </div>
    )
}

export default Landing;