import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import steamLogo from '../steam_logo.png';
import '../index.css';

class Navbar extends React.Component {

    renderLoggedIn = () => {
        return (
            <React.Fragment>

                
                <li className="nav-item navbar-text">
                    Welcome, {this.props.auth.username}!&emsp;
                </li>
                <li className="nav-item dropdown navbar-text">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={`http://api.adorable.io/avatars/50/${this.props.auth.steamId}.png`} alt="Avatar Img" style={{ borderRadius: '50%', verticalAlign: 'middle' }} />

                </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/home">Home</Link>
                        <Link className="dropdown-item" to="/user-profile">Profile</Link>
                        <a className="dropdown-item" href="/api/logout" onClick={(e) => this.logoutHandler(e)} >Logout</a>
                        {/* <p className="dropdown-item" onClick={() => this.logoutHandler()} >Logout</p> */}
                    </div>
                </li>
                


            </React.Fragment>
        )
    }


    logoutHandler = () => {
        axios.patch(`/api/users/${this.props.auth._id}`, { inGame: false } )
    }

    renderLoggedOut = () => {

        return (
            <li className="nav-item navbar-text">
                <a href="/auth/steam">
                    Login via Steam! &emsp; <img src={steamLogo} alt="Steam Logo" style={{ height: '60px', width: '60px', verticalAlign: 'middle' }} />
                </a> &emsp;
            </li>
        )
    }

    renderView = () => {
        switch (this.props.auth) {
            case null:
                return this.renderLoggedOut();
            case false:
                return this.renderLoggedOut();
            default:
                return this.renderLoggedIn();
        }
    }

    render() {
        console.log(this.props.auth);

        return (
            <React.Fragment>

                <nav className="navbar navbar-expand-lg bg-info" role="navigation" >

                    <div className="container">

                        <div className="navbar-translate">
                            <Link to={this.props.auth ? '/home' : '/'} className="navbar-brand">&emsp; GamerU</Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>



                        <div className="collapse navbar-collapse" id="navbarNavDropdown">

                            <ul className="navbar-nav ml-auto">
                                {this.renderView()}

                            </ul>
                        </div>

                    </div>



                </nav>
            </React.Fragment>
            
        );
    }
};

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Navbar);