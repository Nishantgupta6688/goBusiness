import React from "react";

function LoginButton(props) {
  return (
    <div className="flex-row">
        <div className="buttonComponentText1">
            <h2>TAKE</h2>
            <h3>DECISION</h3>
            <h2>ON</h2>
            <h3>YOUR</h3>
            <h1>OWN,</h1>
            <h2>IT'S</h2>
            <h3>YOUR</h3>
            <h2>LIFE,</h2>
            <h1>MAKE</h1>
            <h3>IT</h3>
            <h2>LARGE</h2>
        </div>
      <button className="link" onClick={props.handleLoginButton}>
        Login
      </button>
    </div>
  );
}

export default LoginButton;
