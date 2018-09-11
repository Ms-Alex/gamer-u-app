import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../actions';

import { STEAM_API_KEY } from '../clientConfig/keys'
// import { CLIENT_RENEG_WINDOW } from 'tls';

const SteamAPI = require('steamapi');
const steam = new SteamAPI(STEAM_API_KEY);


class FeaturedGames extends React.Component {
    state = {
        featGames: [], 
        
    }

    componentWillMount = () => {
        steam.getFeaturedGames().then( data => this.setState({
            featGames: data.featured_win
        }) )
        
    }

    featMapper = (arr) => {
        let gamesCarousel = []
        arr.slice(0, 1).forEach(game => gamesCarousel = [...gamesCarousel, <div key={game.id} className="carousel-item active">
            <img className="d-block w-100" src={game.large_capsule_image} alt="game.name"></img>
    </div>])

        arr.slice(1, 5).forEach(game => gamesCarousel = [...gamesCarousel, <div key={game.id} className="carousel-item">
            <img className="d-block w-100" src={game.large_capsule_image} alt="game.name"></img>
        </div>])
        
        return gamesCarousel
    }


    render() {
        console.log(this.state.featGames);
         
        return (
            <div  >
                <h2 className="d-flex justify-content-center">Steam's Top Trending Games</h2>


                <div className="d-flex justify-content-center">


                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ width: "75%" }}>
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>

                        <div className="carousel-inner">

                            {this.featMapper(this.state.featGames)}

                        </div>


                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>


                </div>

                <br /> 

                <div className="d-flex justify-content-center" >
                    <a href="https://store.steampowered.com/" className="btn btn-info" rel="noopener noreferrer" target="_blank"  > Visit Steam Site</a>
                </div>

                    

            </div>
        )
    }
}


export default (FeaturedGames);