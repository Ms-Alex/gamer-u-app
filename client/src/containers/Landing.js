import React from 'react';
import coolSteamButt from '../steam_cool_login.png'


const Landing = (props) => {
    return (
        <div className="container" style={{ textAlign: 'center' }}> 
            <h2>Welcome to GamerU</h2>
            <h4 >
                A social network for Steam gamers.
                To get started, please login through your Steam account.
            </h4>
            
            <a href="/auth/steam">
                <img src={coolSteamButt} alt="Steam Logo" style={{ height: "8em" , verticalAlign: 'middle' }} />
                <p>Click for Steam Login</p>
            </a> 

            
        </div>
    )
}

export default Landing;