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
  }

  render() {
    return (
      <div>
        <div className="top-bar pic-text">
          <Link className="logo pic-text a-link-style" to="/">Tripp</Link>
          <span className="page-title">Log In</span>
        </div>

        <div id="main-frame">
          <div className="log-in-form">
          <div className="email-container">
            <div className="sign-up-text">E-mail Address</div>
            <input className="input-text middle-length" type="email" name="email" id="email-input" placeholder="e.x. jsmith@gmail.com"
              onChange={(event) => this.setState({email: event.target.value})}/><br />
        </div>

        <div className="password-container">
            <div className="sign-up-text">Password</div>
            <input className="input-text middle-length" type="password" name="password" id="password-input"
              onChange={(event) => this.setState({password: event.target.value})}/><br />
        </div>

        <div className="signup-button-container">
            <Link className="pic-text submit-button button-color" to="/profile">Log In</Link>
        </div>

       </div>
       </div>
    </div>
    );
  }
}

export default Login;
