import React from 'react';

import { connect } from 'react-redux';

class InGameUsers extends React.Component {

    usersMapper = () => {

        return this.props.allUsers.map(user => <li key={user._id} className="list-group-item">
            🔹 {user.username} &emsp; <i className="material-icons">
                message </i>
        </li>)
    }

    render() {

        return (
            <div>

                <div className="card card-nav-tabs" style={{ width: "20rem", height: "10rem" }}>
                    <br />
                    <div className="card-header card-header-info">
                        <h4>Message Online Users:</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        {this.props.allUsers.length === 0 ? <li className="list-group-item">No online users</li> : this.usersMapper()}
                    </ul>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        auth: state.auth,
        allUsers: state.allUsers 
    }
}

export default connect(mapStateToProps)(InGameUsers);