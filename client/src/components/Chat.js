import React from "react";
import { connect } from "react-redux";
import io from "socket.io-client";

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('localhost:5000');

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            if (this.state.message === '') {
                alert("Message filed must not be blank.")
                
            } else {
            this.socket.emit('SEND_MESSAGE', {
                // author: this.state.username,
                author: this.props.auth.username,
                message: this.state.message
            })
            this.setState({ message: '' });
            }
        }
    }

    componentDidMount() {
        if (this.props.auth && this.props.auth.username) {
            this.setState({
                username: this.props.auth.username
            })
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-center">


                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr />
                                <div className="messages" style={{ overflow: 'auto' }}>
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="card-footer row" style={{ width: "100%"}}>
                                {/* <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" /> */}
                                {/* {this.props.auth !== null && this.props.auth.username ? <p>{this.props.auth.username}</p> : 'you' } */}
                                <p className="card-text">You:</p>
                                <br />
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} style={{ width: "90%"}} required />
                                <br />
                                <button onClick={this.sendMessage} className="btn btn-info form-control" style={{ width: "30%" }}>Send</button>
                            </div>
                        </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Chat);