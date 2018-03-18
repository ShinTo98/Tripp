import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileActions from '../../actions/profileActions';

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
    this.check = this.check.bind(this);
  }

  checkValidity(e) {
    // If email || password is empty
    let initCheck = true;
    if(this.state.email == "") {
      e.preventDefault();
      initCheck = false;
      alert("Please fill out your e-mail address!");
    } else if(this.state.password == "") {
      e.preventDefault();
      initCheck = false;
      alert("Please fill out your password!");
    }

    // Check if such account exists
    if(initCheck) {
      const same_profile = this.props.profiles.filter(profile => profile.id == this.state.email);
      if(same_profile.length == 0) {
        e.preventDefault();
        alert("E-mail address \"" + this.state.email + "\" does not exist, please verify!");
      } else if(same_profile[0].password != this.state.password) {
        e.preventDefault();
        alert("Password incorrect, please verify!");
      }
    }

    // } else if(!localStorage.getItem(this.state.email)) {
    //  e.preventDefault();
    //  alert("E-mail address \"" + this.state.email + "\" does not exist, please verify!");
    //} else if(JSON.parse(localStorage.getItem(this.state.email)).password != this.state.password) {
    //  e.preventDefault();
    //  alert("Password incorrect, please verify!");
    //}
  }

  setEmail(e) { this.setState({email: e.target.value}); }
  setPassword(e) { this.setState({password: e.target.value}); }
  check(e) { this.checkValidity(e); }

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
            <Link className="pic-text submit-button button-color" to={`/profile/${this.state.email}`} 
              onClick={this.check}>Log In</Link>
        </div>

       </div>
       </div>
    </div>
    );
  }
}

Login.propTypes = {
  profiles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Populate the profile with all current profiles
function mapStateToProps(state, ownProps) {
  return {
    profiles: state.profiles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);