import React from 'react'
import "./ProfileScreen.css";
import Nav from '../Nav';

import { useSelector } from 'react-redux';
// import { selectUser } from "../features/userSlice.js";

import {auth} from "../firebase" ;
import { useNavigate } from "react-router-dom";
import { selectUser } from '../redux/reducers/userSlice';
// import { selectUser } from "../features/userSlice.js";


function ProfileScreen() {
  const user = useSelector(selectUser);
    const navigate = useNavigate();
    const home = () => {
      navigate("/");
    };
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen-body">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"             
            alt="info"
          />
          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className="profileScreen-planes">
              <h3>Plans</h3>
              <p></p>
              <div className='back_signout_button'>
                <button
                  onClick={() => auth.signOut()}
                  className="profileScreen-signOut"
                >
                  Sign Out
                </button>
                <button className="profileScreen-signOut" onClick={home}>
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen