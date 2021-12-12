import React from 'react';


const Profile = ({ address, }) => {

    return (
        <div>
            <div className="row align-items-center profile-header">
                <div className="col-md text-center text-md-left">
                    <h2>{address}</h2>
                    <p className="lead text-muted">{email}</p >
                </div>
            </div>

            <div className="row">
                <pre className="col-12 text-light bg-dark p-4">
                    <p>Address: {address}</p>
                </pre>
            </div>


        </div>
    )
};


export default Profile