import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    // Login state: user email & password
    this.state = {
      email: "",
      password: ""
    };

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  /*
  checkValidity(e) {
    // If email || password is empty
    if(this.state.email == "") {
      e.preventDefault();
      alert("Please fill out your e-mail address!");
    } else if(this.state.password == "") {
      e.preventDefault();
      alert("Please fill out your password!");
    } else if(!localStorage.getItem(this.state.email)) {
      e.preventDefault();
      alert("E-mail address \"" + this.state.email + "\" does not exist, please verify!");
    } else if(JSON.parse(localStorage.getItem(this.state.email)).password != this.state.password) {
      e.preventDefault();
      alert("Password incorrect, please verify!");
    }
  }
  */

  setEmail(e) { this.setState({email: e.target.value}); }
  setPassword(e) { this.setState({password: e.target.value}); }

  render() {
    return (
      <div>
        <div id="main-frame">
          <div className="log-in-form">
          <div className="email-container">
            <div className="sign-up-text" id="log-in-email">E-mail Address</div>
            <input className="input-text middle-length" type="email" name="email" id="email-input"
              onChange={this.setEmail}/><br />
        </div>

        <div className="password-container">
            <div className="sign-up-text" id="log-in-password">Password</div>
            <input className="input-text middle-length" type="password" name="password" id="password-input"
              onChange={this.setPassword}/><br />
        </div>

        <div className="signup-button-container">
            <Link className="pic-text submit-button button-color" to={`/profile/${this.state.email}`}>Log In</Link>
        </div>

       </div>
       </div>
    </div>
    );
  }
}

export default Login;
