import React from 'react';
import steamButton from '../steam_butt.png';



const Landing = (props) => {
    return (
        <div className="container"> 
            <h2>Landing. NOT logged in!</h2>
            <p >
                To get started, please login through your Steam account.
            </p>

            <a href="/auth/steam">
                <img src={steamButton} alt="Steam Button" />
            </a>
        </div>
    )
}

export default Landing;