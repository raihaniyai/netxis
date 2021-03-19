import React from 'react';
import './style.css';

const Profile = () => {

    return (
        <div className="card" style={{display: "block"}}>
            <div className="content">
                <div className="image">
                    <img src="images/profile.svg" width="75px" alt="profile"/>
                </div>
                <div>
                    <div className="name">Dharmawan Santosa</div>
                    <div className="phone">Phone Number</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;