import React from 'react';


class FeaturedGames extends React.Component {
    state = {
        featGames: [],      
    }

    featMapper = (arr) => {
        if (this.props.featGames) {
            let gamesCarousel = []
            arr.slice(0, 1).forEach(game => gamesCarousel = [...gamesCarousel, <div key={game.id} className="carousel-item active">
                <img className="d-block w-100" src={game.large_capsule_image} alt="game.name"></img>
            </div>])

            arr.slice(1, 5).forEach(game => gamesCarousel = [...gamesCarousel, <div key={game.id} className="carousel-item">
                <img className="d-block w-100" src={game.large_capsule_image} alt="game.name"></img>
            </div>])

            return gamesCarousel
        }
    }


    render() {
         
        return (
            <div>
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

                            {this.featMapper(this.props.featGames)}

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