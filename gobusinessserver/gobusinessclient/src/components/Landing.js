import React, { useState } from "react";
import Login from "./Login";
import LoginButton from "./LoginButton";
import Register from "./Register";
import RegisterButton from "./RegisterButton";
import RegistraionComplete from "./RegistrationComplete";

function Landing(props) {
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [registerFormOpen, setRegisterFormOpen] = useState(false);
  const [Registered, setRegistered] = useState(false);

  const handleLoginButton = (e) => {
    e.preventDefault();
    setLoginFormOpen(true);
    setRegisterFormOpen(false);
  };

  const handleRegisterButton = (e) => {
    e.preventDefault();
    setRegisterFormOpen(true);
    setLoginFormOpen(false);
  };

  const loginFormOpenedStyle = {
    width: "200px",
    height: "280px",
    top: "15%",
    right: "80%",
    transition: "width 1s,height 1s,top 1s,right 1s,background 1s",
  };

  const loginFormClosedStyle = {
    width: "300px",
    height: "50px",
    paddingRight: "230px",
    top: "40%",
    right: "40%",
    transition: "width 1s,height 1s,top 1s,right 1s,background 1s",
  };

  const registerFormOpenedStyle = {
    width: "200px",
    height: "280px",
    top: "15%",
    left: "80%",
    transition: "width 1s,height 1s,top 1s,left 1s,background 1s",
  };

  /* This CSS style is applied when the drawer is closed */
  const registerFormClosedStyle = {
    width: "680px",
    height: "50px",
    top: "40%",
    left: "50%",
    transition: "width 1s,height 1s,top 1s,left 1s,background 1s",
  };

  return (
    <div className="screen flex-row">
      {Registered ? <RegistraionComplete setRegistered={setRegistered} setRegisterFormOpen={setRegisterFormOpen} setLoginFormOpen={setLoginFormOpen}/>: ""}
      <div className="box">
        <div
          className="landing-page"
          style={loginFormOpen ? loginFormOpenedStyle : loginFormClosedStyle}
        >
          {loginFormOpen ? (
            <Login customer={props.customer} setIsLoggedIn={props.setIsLoggedIn} setLoginFormOpen={setLoginFormOpen} />
          ) : (
            <LoginButton handleLoginButton={handleLoginButton} />
          )}
        </div>
      </div>
      <div className="box">
        <div
          className="landing-page"
          style={
            registerFormOpen ? registerFormOpenedStyle : registerFormClosedStyle
          }
        >
          {registerFormOpen ? (
            <Register setRegistered={setRegistered} setRegisterFormOpen={setRegisterFormOpen} />
          ) : (
            <RegisterButton handleRegisterButton={handleRegisterButton} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;
