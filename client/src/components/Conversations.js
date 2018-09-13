import React from 'react';


class Conversations extends React.Component {

    state = {
        conversations: []
    }

    render() {
        return (
            <div>
                
                <div className="card card-nav-tabs" style={{ width: "20rem", height: "15rem" }}>
                    <br />
                    <div className="card-header card-header-info">
                        {/* <h4>Your Conversations:</h4> */}
                        <i class="material-icons">
                            question_answer
                        </i>
                        &emsp;Your Conversations:
                    </div>
                    <ul className="list-group list-group-flush">

                        {this.state.conversations.length === 0 ? <li className="list-group-item">None so far</li> : <li className="list-group-item">cool</li> }

                    </ul>
                </div>

            </div>
        )
    }
}

export default Conversations;