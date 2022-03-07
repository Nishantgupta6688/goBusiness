import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actions from '../redux/actions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firmName: "",
      firmOwner: "",
      firmEmailAddress: "",
      firmContactNumber: "",
      password: "",
    };
  }

  handleRegisterFormClose = (e) => {
    e.preventDefault();
    this.props.setRegisterFormOpen(false);
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };


  handleSubmit = (e) => {
    e.preventDefault(); 
    actions.submitFirm(this.state);
    this.setState({
      firmName: "",
      firmOwner: "",
      firmEmailAddress: "",
      firmContactNumber: "",
      password: "",
    })
    this.props.setRegistered(true);
  }

  

  render() {
    return (
      <div className="screen">
        <form
          onSubmit={this.handleSubmit}
          className="form_overall registerForm"
        >
          <br />
          <div>
            <FontAwesomeIcon
              className="formCloseButton"
              icon={faArrowLeftLong}
              onClick={this.handleRegisterFormClose}
            />
          </div>
          <br />
          <div>
            <input
              placeholder="Firm Name"
              name="firmName"
              value={this.state.firmName}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <input
              placeholder="Firm Owner"
              name="firmOwner"
              value={this.state.firmOwner}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <input
              placeholder="Firm Email Address"
              type="email"
              name="firmEmailAddress"
              value={this.state.firmEmailAddress}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <input
              placeholder="Firm Contact Number"
              type="number"
              name="firmContactNumber"
              value={this.state.firmContactNumber}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default connect(null,actions)(Register);
