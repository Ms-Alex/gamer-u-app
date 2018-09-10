import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class InGameUsers extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios('/api/users').then(data => {
            let filteredUsers = data.data.filter( user => user.steamId !== this.props.auth.steamId)
            this.setState({
                users: filteredUsers
            })
        }
        )
    }

    usersMapper = () => {
        // let filteredArr = this.state.users.filter( user => user.steamId !== this.props.auth.steamId)
        // return filteredArr.map(user => <li className="list-group-item">
        //     {user.username}
        // </li> )
        
        return this.state.users.map(user => <li className="list-group-item">
            {user.username} &emsp; <i class="material-icons">
                message </i>
        </li>)
    }

    render() {
        console.log(this.state.users)
        return (
            <div>

                <div className="card card-nav-tabs" style={{ width: "20rem" }}>
                    <br />
                    <div className="card-header card-header-info">
                        <h4>Message Online Users:</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        {this.state.users.length === 0 ? <li className="list-group-item">No online users</li> : this.usersMapper()}
                    </ul>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(InGameUsers);