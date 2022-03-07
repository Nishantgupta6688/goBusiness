import React from "react";

function RegisterButton(props) {
  return (
    <div className="flex-row">
      <button className="link" onClick={props.handleRegisterButton}>
        Register
      </button>
      <div className="buttonComponentText">
        <h2>FOCUS</h2>
        <h3>ON</h3>
        <h2>WHAT</h2>
        <h3>YOU</h3>
        <h1>DESIRE</h1>
        <h2>RATHER</h2>
        <h3>THAN</h3>
        <h2>WHAT YOU</h2>
        <h1>WANT</h1>
      </div>
    </div>
  );
}

export default RegisterButton;
