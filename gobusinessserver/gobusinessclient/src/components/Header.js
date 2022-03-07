import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { Link, useHistory } from "react-router-dom";

function Header({ customer, isLoggedIn, setIsLoggedIn }) {
  let history = useHistory();

  const logout = () => {
    actions.logout(history);
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <ul className="header">
          <li><Link className="link" to="/">Profile</Link></li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      ) : (
        <ul className="header">
          <li>GoBusiness</li>
          <li>Downloads</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      )}
    </React.Fragment>
  );
}

export default connect(null, actions)(Header);
