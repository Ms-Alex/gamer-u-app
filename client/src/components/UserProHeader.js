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

                    <div className="card text-center">
                        <div className="card-header">
                                
                            <img src={this.props.auth.avatar} alt="avatar" style={{ borderRadius: '50%', width: '80px', height: '80px' }} />
                                
                        </div>

                        <div className="card-body">
                            <h4 className="card-title">{this.props.auth.username}'s Profile Page</h4>
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

