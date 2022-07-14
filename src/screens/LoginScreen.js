import React, { useState, useEffect } from "react";
import SignUpScreen from "./SignUpScreen.js";
import "./LoginScreen.css";

import Aos from "aos";
import "aos/dist/aos.css";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-in-sine" });
  }, []);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo-img"
        />

        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Login
        </button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1 data-aos="fade-down">
              Ulitimated films,Tv programmes and more.
            </h1>
            <h2 data-aos="fade-left">Watch anywhere. Cancel anytime.</h2>
            <div data-aos="zoom-out-up" className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
            <h3 data-aos="fade-right">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </>
        )}
      </div>
      {/*  down part  */}
    </div>
  );
}

export default LoginScreen;
