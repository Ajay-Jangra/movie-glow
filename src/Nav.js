import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Nav.css";
function Nav() {
    const [show , handleShow] = useState(false);
   


    const transitionNavBar=()=>{
             if(window.scrollY > 40){
                  handleShow(true);
             }
             else handleShow(false);
    };

    useEffect(() => {
         window.addEventListener("scroll",transitionNavBar);
         return () =>{
             window.removeEventListener("scroll", transitionNavBar);
         };
    }, [])
    return (
      <div className={`nav ${show && "nav_black"}`}>
        <Link to="/">
          <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </Link>
        <Link to='/search'>
          <button className='searchButton' type="submit"><i class="fa fa-search"></i></button>
        </Link>
        <Link to="/profile">
          <img
            className="nav_avatar"
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            alt="Netflix Logo"
          />
        </Link>
      </div>
    );
}

export default Nav
