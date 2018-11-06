import React from 'react';
import Message from './Message';
import UUID from 'uuid';

class Messages extends React.Component {
    componentDidUpdate() {
        // There is a new message in the state, scroll to bottom of list
        const objDiv = document.getElementById('messageList');
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render() {
        const messages = this.props.messages.map((message, i) => {
            return (
                <Message
                    key={UUID()}
                    username={message.username}
                    message={message.message}
                    fromMe={message.fromMe} />
            );
        });

        return (
            <div className='messages' id='messageList'>
                {messages}
            </div>
        );
    }
}

export default Messages;