import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import steamLogo from '../steam_logo.png';
import '../index.css'


class Navbar extends React.Component {

    renderLoggedIn = () => {
        return (
            <React.Fragment>
                <li>
                    <Link to="/user-profile">

                        Welcome, {this.props.auth.username}!&emsp;
                    
                        <img src={`http://api.adorable.io/avatars/50/${this.props.auth.steamId}.png`} alt="Avatar Img" style={{ borderRadius: '50%', verticalAlign: 'middle' }} />
                    </Link>
                    
                </li>
                <li>
                    <a href="/api/logout">
                        Logout
                    </a>
                </li>
            </React.Fragment>
        )
    }

    renderLoggedOut = () => {
        return (
            <li>
                <a href="/auth/steam">
                    Login via Steam <img src={steamLogo} alt="Steam Logo" style={{ height: '60px', width: '60px', verticalAlign: 'middle' }} />
                </a>
            </li>
        )
    }

    renderView = () => {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return this.renderLoggedOut();
            default:
                return this.renderLoggedIn();
        }
    }

    render() {

        return (
            <React.Fragment>

                <nav>
                    <div className="nav-wrapper purple darken-1">
                        <Link to={ this.props.auth ? '/home' : '/' } className="left brand-logo">&emsp; GamerU</Link>

                        <ul className="right">

                            {this.renderView()}

                        </ul>

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