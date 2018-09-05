import React from 'react';



class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">&emsp; GamerU</a>

                    <ul className="right">
                        <li>
                            <a>Login With Steam</a>
                        </li>

                    </ul>

                </div>
            </nav>
        );
    }
};

export default Navbar;