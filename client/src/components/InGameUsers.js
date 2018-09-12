import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

class InGameUsers extends React.Component {
    state = {
        friendsObjs: []
    }

    componentDidMount() {
        this.props.fetchFriends();
    }

    handleAddPerson = (sendToId) => {
        // const body = {
        //     userOne: this.props.auth._id,
        //     userTwo: sendToId,
        //     status: 2
        // }
        // axios.post('/api/relationships', body)
        alert('Feature Yet To Be Added')
    }

    handleMessButt = () => {
        alert('Feature Yet To Be Added')
    }

    alreadyAdded = (userTwoId) => {
        // let result;

        // this.props.friends.forEach(relation => {
        //     if(relation.userOne === this.props.auth._id && relation.userTwo === userTwoId) {
        //         return result = null
        //     } else {
        //         return result = (<button class="btn btn-primary btn-fab btn-fab-mini btn-round" onClick={() => this.handleAddPerson(userTwoId)}>
        //             <i className="material-icons">person_add</i>
        //         </button>)
        //     }
        // });
        // return result;
        this.props.friends.forEach(relation => {
            
        })

    }

    usersMapper = () => {

        return this.props.allUsers.map(user => <li key={user._id} className="list-group-item">
            🔹 {user.username} &emsp; 
                <button class="btn btn-primary btn-fab btn-fab-mini btn-round" onClick={this.handleMessButt} >
                    <i className="material-icons">message</i>
                </button>

            <button class="btn btn-primary btn-fab btn-fab-mini btn-round" onClick={() => this.handleAddPerson(user._id)}>
                    <i className="material-icons">person_add</i>
                </button>

        </li>)
    }

    render() {

        return (
            <div>

                <div className="card card-nav-tabs" style={{ width: "25rem", height: "15rem" }}>
                    <br />
                    <div className="card-header card-header-info">
                        <h4>Online Users:</h4>
                    </div>
                    <div style={{ height: "10rem", overflowY: "scroll" }}>
                        <ul className="list-group list-group-flush">
                            {this.props.allUsers.length === 0 ? <li className="list-group-item">No online users</li> : this.usersMapper()}
                        </ul>
                    </div>
                    
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        auth: state.auth,
        allUsers: state.allUsers ,
        friends: state.friends
    }
}

export default connect(mapStateToProps, actions)(InGameUsers);