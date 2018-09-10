import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class UserProHeader extends React.Component {

    componentDidMount() {
        if(!this.props.auth) {
            this.props.fetchUser();
        }
    }

    renderView = () => {
        if (this.props.auth) {
            return (
                // <React.Fragment>



                    // <img src={this.props.auth.avatar} alt="avatar" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
                    // <h3>{this.props.auth.username}'s Profile Page</h3>

                    <div class="card text-center">
                        <div class="card-header">
                                
                            <img src={this.props.auth.avatar} alt="avatar" style={{ borderRadius: '50%', width: '80px', height: '80px' }} />
                                
                        </div>

                        <div class="card-body">
                            <h4 class="card-title">{this.props.auth.username}'s Profile Page</h4>
                            {/* <p class="card-text">I like playing RPGs</p> */}
                        </div>
                    </div>

            )
        }
    }

    render() {
        console.log(this.props.auth)
        return (

            <div>
                {this.renderView()}                
            </div>
                

        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(UserProHeader);

