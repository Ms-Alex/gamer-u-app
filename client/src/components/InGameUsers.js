import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

class InGameUsers extends React.Component {
    state = {
        friendsObjs: []
    }

    componentDidMount = () => {
        this.props.fetchFriends();
    }

    handleAddPerson = (sendToId) => {
        const body = {
            userOne: this.props.auth._id,
            userTwo: sendToId,
            status: 2
        }
        axios.post('/api/relationships', body).then(() => alert('Successfully Added') )
        // console.log('addPerson Clicked');
        // alert('Feature Yet To Be Added')
    }

    handleMessButt = () => {
        alert('Feature Yet To Be Added')
    }

    alreadyAdded = (userTwoId) => {
        
        let userObj = this.props.friends.find(relation => relation.userOne === this.props.auth._id  && relation.userTwo === userTwoId )
        if (!userObj) {
            return ( 
                <button className="btn btn-primary btn-fab btn-fab-mini btn-round" onClick={() => this.handleAddPerson(userTwoId)} >
                    <i className="material-icons">person_add</i>
                </button>
            )
        }

    }

    usersMapper = () => {

        return this.props.allUsers.map(user => <li key={user._id} className="list-group-item">
            🔹 {user.username} &emsp; 
                <button className="btn btn-primary btn-fab btn-fab-mini btn-round" onClick={this.handleMessButt} >
                    <i className="material-icons">message</i>
                </button>

            {/* <button class="btn btn-primary btn-fab btn-fab-mini btn-round" onClick={() => this.handleAddPerson(user._id)}>
                    <i className="material-icons">person_add</i>
                </button> */}
                {this.alreadyAdded(user._id)}

        </li>)
    }

    render() {

        return (
            <div>

                <div className="card card-nav-tabs" style={{ width: "25rem", height: "15rem" }}>
                    <br />
                    <div className="card-header card-header-info">
                        {/* <h5 className="title" >Online Users:</h5> */}
                        Online Users:
                    </div>
                    <div style={{ height: "12rem", overflowY: "scroll" }}>
                        <ul className="list-group list-group-flush">
                            {this.props.allUsers.length === 0 ? <li className="list-group-item">No online users</li> : this.usersMapper()}
                        </ul>
                    </div>
                    
                </div>

            </div>
        )
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.friends !== prevProps.friends){
            this.componentDidMount()
        }
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