import React from 'react';

class FriendsInProfile extends React.Component {
    
    
    render() {
        return (
            <div style={{ float: "left" }} className="col-sm-5" >
                

                <div className="card card-nav-tabs" style={{ width: "20rem" }}>
                    <br />

                    <div className="card-header card-header-info d-flex p-2">
                        <i className="material-icons ">
                            person_add
                        </i>
                        &emsp;Your Pending Requests:
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">None yet</li>
                    </ul>
                </div>

                <br />
                {/* <hr style={{ width: "70%", align: "left" }} /> */}
                <br />


                <div className="card card-nav-tabs" style={{ width: "20rem" }}>
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

                
            </div>
        )
    }
}

export default FriendsInProfile;
