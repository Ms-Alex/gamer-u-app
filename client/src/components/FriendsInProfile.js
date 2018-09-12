import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';

import Conversations from '../components/Conversations';


class FriendsInProfile extends React.Component {
    state = {
        pending: [],
        sent: [],
        friends: [],
        friendsList: []
    }
    
    componentDidMount() {
        this.props.fetchPending();
    }

    // CURRENT USER MUST BE USERTWO
    mapPending = () => {
        const currentUsersPending = this.props.pending.filter( pend => pend.userTwo === this.props.auth._id );
        console.log('currentUserPends: ', currentUsersPending)
        const pends = currentUsersPending.map( async (mypend) => {
            let userOneObj = await axios.get(`/api/users/${mypend.userOne}`);
            return userOneObj;
        }  )

        // Promise.all(pends).then(console.log)

    }

    // CURRENT USER MUST BE USERONE
    mapSent = () => {
        const currentUsersSent = this.props.pending.filter(pend => pend.userOne === this.props.auth._id);
        // console.log('currentUserSent: ', currentUsersSent) ===== IT WORKS
        const pends = currentUsersSent.map(async (mypend) => {
            let userTwoObj = await axios.get(`/api/users/${mypend.userTwo}`);
            return userTwoObj;
        })

        Promise.all(pends).then( res => console.log(res.data))
        // Promise.all(pends).then( res => this.setState({
        //     sent: res.data
        // }) )

    }

    mapFriends = () => {
        let myRelations = this.props.friends.filter( relation =>  relation.userOne === this.props.auth._id || relation.userTwo === this.props.auth._id )

        myRelations.forEach(relation => {
            // if (relation.userOne !== )
        });
    }
    
    render() {
        console.log('pends: ', this.props.pending)
        console.log('auth: ', this.props.auth);
        console.log('friends: ', this.props.friends);
        // this.mapPending();
        // this.mapSent();

        // console.log('sent state: ', this.state.sent);

        return (
            <div style={{ float: "left" }} className="col-sm-5" >
                

                {/* <div className="card card-nav-tabs" style={{ width: "20rem", height: "10rem" }}>
                    <br />

                    <div className="card-header card-header-info d-flex p-2">
                        <i className="material-icons ">
                            hourglass_full
                        </i>
                        &emsp;Your Pending Requests:
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">None yet</li>
                    </ul>
                </div>

                <br />
                <br />

                <div className="card card-nav-tabs" style={{ width: "20rem", height: "10rem" }}>
                    <br />

                    <div className="card-header card-header-info d-flex p-2">
                        <i className="material-icons ">
                            person
                        </i>
                        &emsp;Your Sent Requests:
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">None yet</li>
                    </ul>
                </div> */}

                <br />
                {/* <hr style={{ width: "70%", align: "left" }} /> */}
                <br />


                <div className="card card-nav-tabs" style={{ width: "20rem", height: "15rem" }}>
                    <br />

                    <div className="card-header card-header-info d-flex p-2">
                        <i className="material-icons ">
                            people
                        </i>
                        &emsp;Your Friends:
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">None yet</li>
                    </ul>
                </div>

                <br />
                <br />

                <Conversations />
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        pending: state.pending,
        sent: state.sent,
        friends: state.friends
    }
}

export default connect(mapStateToProps, actions)(FriendsInProfile);
