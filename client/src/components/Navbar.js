import React from 'react';
import { connect } from 'react-redux';
import steamLogo from '../steam_logo.png'

class Navbar extends React.Component {

    loggedInDropDown = () => {
        return (
            <ul id="dropdown1" className="dropdown-content">
                <li><a >Profile</a></li>
                <li className="divider"></li>
                <li><a href="/api/logout">Logout</a></li>
            </ul>
        )
    }

    renderLoggedIn = () => {
        return (
            <React.Fragment>
                <li>
                    Welcome, {this.props.auth.username}!&emsp;
                </li>
                <li>
                    {/* <a className="dropdown-trigger" data-target="dropdown1">
                        <img src={`http://api.adorable.io/avatars/50/${this.props.auth.steamId}.png`} alt="Avatar Img" style={{ borderRadius: '50%', verticalAlign: 'middle' }} />
                        <i className="material-icons right">arrow_drop_down</i>
                    </a> */}
                    <a>
                        <img src={`http://api.adorable.io/avatars/50/${this.props.auth.steamId}.png`} alt="Avatar Img" style={{ borderRadius: '50%', verticalAlign: 'middle' }} />
                    </a>
                    
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
        console.log(this.props)

        return (
            <React.Fragment>

                {this.loggedInDropDown()}

                <nav>
                    <div className="nav-wrapper">
                        <a className="left brand-logo">&emsp; GamerU</a>

                        <ul className="right">
                            {/* <li>
                            <a>Login With Steam</a>
                        </li> */}

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