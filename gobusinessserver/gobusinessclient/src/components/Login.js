import React,{useState} from "react";
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";
import * as actions from '../redux/actions'

function Login(props) {
  let history = useHistory();
  const [firmEmailAddress, setFirmEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleFirmEmailAddress = (e) => {
    setFirmEmailAddress(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLoginFormClose = (e) => {
    e.preventDefault();
    props.setLoginFormOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    actions.login({firmEmailAddress: firmEmailAddress,password: password},history)
    props.setIsLoggedIn(prev => {
      return{
        ...prev,
      reload: true
      }})
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form_overall loginForm">
      <br/>
        <div>
          <FontAwesomeIcon className="formCloseButton" icon={faArrowLeftLong} onClick={handleLoginFormClose} />
        </div>
        <br/>
        <div>
          <input
            type="email"
            placeholder="Username"
            name="firmName"
            value={firmEmailAddress}
            onChange={handleFirmEmailAddress}
          />
        </div>
        <br/>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default connect(null,actions)(Login);
