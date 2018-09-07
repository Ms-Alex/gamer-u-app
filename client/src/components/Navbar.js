import React from 'react';
// import M from 'materialize-css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import steamLogo from '../steam_logo.png';
import '../index.css';
// import $ from 'jquery';
// import M from 'materialize-css';

// import * as $AB from 'jquery';

class Navbar extends React.Component {

    // componentDidMount() {
    //     // M.AutoInit();
        // M.Dropdown.init(".dropdown-trigger");
    //     // window.$(".dropdown-trigger").dropdown();

    //     $(".dropdown-trigger").dropdown();
    // }

    renderLoggedIn = () => {
        return (
            <React.Fragment>
                {/* <li>
                    <Link to="/user-profile">

                        Welcome, {this.props.auth.username}!&emsp;
                    
                        <img src={`http://api.adorable.io/avatars/50/${this.props.auth.steamId}.png`} alt="Avatar Img" style={{ borderRadius: '50%', verticalAlign: 'middle' }} />
                    </Link>
                    
                </li>
                <li>
                    <a href="/api/logout">
                        Logout
                    </a>
                    
                </li> */}

                
                <li className="nav-item navbar-text">
                    Welcome, {this.props.auth.username}!&emsp;
                </li>
                <li className="nav-item dropdown navbar-text">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={`http://api.adorable.io/avatars/50/${this.props.auth.steamId}.png`} alt="Avatar Img" style={{ borderRadius: '50%', verticalAlign: 'middle' }} />

                </a>
                    <div className="dropdown-menu" ariaLabelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/user-profile">Profile</Link>
                        <a className="dropdown-item" href="/api/logout">Logout</a>
                    </div>
                </li>


                


            </React.Fragment>
        )
    }

    renderLoggedOut = () => {
        return (
            <li className="nav-item" >
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

                {/* <nav className="navbar fixed-top navbar-dark" style={{ backgroundColor: '#e3f2fd'}} > */}
                <nav className="navbar navbar-expand-lg bg-info" role="navigation" >

                    <div className="container">

                        <div className="navbar-translate">
                            <Link to={this.props.auth ? '/home' : '/'} className="navbar-brand">&emsp; GamerU</Link>

                            <button className="navbar-toggler" type="button" dataToggle="collapse" ariaExpanded="false" ariaLabel="Toggle navigation">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>



                        <div className="collapse navbar-collapse" id="navbarNavDropdown">

                            <ul className="navbar-nav ml-auto">



                            </ul>
                        </div>

                    </div>


                            {this.renderView()}



                </nav>
            </React.Fragment>
            
        );
    }
};

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Navbar);