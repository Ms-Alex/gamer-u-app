import React from 'react';

class Message extends React.Component {
    render() {
        return (
            <div className={`message ${fromMe}`}>
                <div className='username'>
                    {this.props.username}
                </div>
                <div className='message-body'>
                    {this.props.message}
                </div>
            </div>
        );
    }
}

export default Message;
