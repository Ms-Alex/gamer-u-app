import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';

import Conversations from '../components/Conversations';


class FriendsInProfile extends React.Component {
    state = {
        pending: [],
        sent: [],
        myRelations: [],
        friendsObj: []
    }
    
    componentDidMount = () => {
        // this.props.fetchPending();
        this.props.fetchFriends()
        // .then(() => this.mapFriends() )

        this.mapFriends();

    }

    // componentDidUpdate = (prevProps) => {
    //     if (this.props.friends !== prevProps.friends) {
    //         // this.mapFriends();
    //         this.props.fetchFriends();
            
    //     }
    // }

    // CURRENT USER MUST BE USERTWO
    // mapPending = () => {
    //     const currentUsersPending = this.props.pending.filter( pend => pend.userTwo === this.props.auth._id );
    //     console.log('currentUserPends: ', currentUsersPending);

    //     const pends = currentUsersPending.map( async (mypend) => {
    //         let userOneObj = await axios.get(`/api/users/${mypend.userOne}`);
    //         return userOneObj;
    //     }  )

    //     // Promise.all(pends).then(console.log)
    // }

    // CURRENT USER MUST BE USERONE
    // mapSent = () => {
    //     const currentUsersSent = this.props.pending.filter(pend => pend.userOne === this.props.auth._id);
    //     // console.log('currentUserSent: ', currentUsersSent) ===== IT WORKS
    //     const pends = currentUsersSent.map(async (mypend) => {
    //         let userTwoObj = await axios.get(`/api/users/${mypend.userTwo}`);
    //         return userTwoObj;
    //     })

    //     Promise.all(pends).then( res => console.log(res.data))
    //     // Promise.all(pends).then( res => this.setState({
    //     //     sent: res.data
    //     // }) )
    // }

    getData = () => {
        const data = Promise.all( this.state.myRelations.map(async (relation) => await axios.get(`/api/users/${relation.userTwo}`))
        )
        console.log(data);
        return data
    }

    mapFriends = () => {
        let myRelations = this.props.friends.filter( relation => relation.userOne === this.props.auth._id );

        console.log('myrelations: ', myRelations);

        if(myRelations.length !== 0) {

            // let data = 
            // Promise.all(myRelations.map( async (relation) => {
            //     console.log(relation.userTwo)
            //     return await axios.get(`/api/users/${relation.userTwo}`)
            // })).then((data) => this.setState({
            //     friendsObj: data.data
            // }) )

            // console.log('Promise: ', data)

            myRelations.forEach( async relation => 

                await axios.get(`/api/users/${relation.userTwo}`)
                    .then(data => {
                        console.log(data);
                        if(!this.state.friendsObj.includes(data.data)) {
                            this.setState({
                                friendsObj: [...this.state.friendsObj, data.data]
                            })
                        }
                        
                    })
                
                )
            

        } else {
            this.setState({
                friendsObj: []
            })
        }

    }

    handleDelete = (friendId) => {
        let relationObj = this.props.friends.find(relation => (relation.userOne === this.props.auth._id && relation.userTwo === friendId) )
        
        axios.delete(`/api/relationships/${relationObj._id}`) .then(() => this.props.fetchFriends() ).then(() => this.mapFriends())
    }

    handleMessButt = () => {
        alert('Feature Yet To Be Added')
    }

    renderFriends = () => {
        // this.mapFriends();
        if (this.state.friendsObj && this.state.friendsObj.length !== 0){
            return this.state.friendsObj.map(user => <li className="list-group-item">
            
                🔹 {user.username} &emsp;

                <button class="btn btn-primary btn-fab btn-fab-mini btn-round"  onClick={this.handleMessButt} >
                    <i className="material-icons">message</i>
                </button>

                <button class="btn btn-primary btn-fab btn-fab-mini btn-round" onClick={() => this.handleDelete(user._id)} >
                    <i className="material-icons">clear</i>
                </button>

            </li> )
        } else {
            return <li className="list-group-item">None yet</li>
        }
    }
    
    render() {

        console.log(this.props.friends)
        console.log(this.state.friendsObj);

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


                <div className="card card-nav-tabs" style={{ width: "20rem", height: "15rem"}}>
                    <br />

                    <div className="card-header card-header-info d-flex p-2">
                        <i className="material-icons ">
                            people
                        </i>
                        &emsp;People You Follow:
                    </div>

                    <div style={{ height: "12rem", overflowY: "scroll" }} >

                        <ul className="list-group list-group-flush">
                            {/* <li className="list-group-item">None yet</li> */}
                            {this.renderFriends()}
                        </ul>

                    </div>
    
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
        // pending: state.pending,
        // sent: state.sent,
        friends: state.friends
    }
}

export default connect(mapStateToProps, actions)(FriendsInProfile);
