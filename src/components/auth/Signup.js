import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileActions from '../../actions/profileActions';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_e: "",
      confirm_p: "",
      displayGuideInfo: "none"
    };
    
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.confirmEmail = this.confirmEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
    this.handleOnlyTourist = this.handleOnlyTourist.bind(this);
    this.handleAlsoTourGuide = this.handleAlsoTourGuide.bind(this);
  }

  checkValidity(e, signed) {
    let checked = true;
    // First check entries
    if(this.state.firstName == "" || this.state.lastName == "" ||
       this.state.email == "" || this.state.password == "") {
      e.preventDefault();
      checked = false;
      alert("Everything needs to be filled out!");
    } else if(this.state.email != this.state.confirm_e) {
      e.preventDefault();
      checked = false;
      alert("E-mail not the same as confirmed!");
    } else if(this.state.password != this.state.confirm_p) {
      e.preventDefault();
      checked = false;
      alert("Password not the same as confirmed!");
    } 

    // Create a new profile
    this.props.actions.createProfile(this.state);
    alert("Successfully signed up! Now you can log in with your new account.");

    /*else if(localStorage.getItem(this.state.info.email)) {
      e.preventDefault();
      checked = false;
      alert("Account already exists! Please use a different e-mail address.");
    }*/

    /*
    // If everything is fine, store info and proceed
    if(!signed && checked) {
      localStorage.setItem(this.state.email, JSON.stringify({
        firstName: this.state.firstName, 
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        displayGuideInfo: "block"
      }));
    }
    if(signed && checked) {
      localStorage.setItem(this.state.email, JSON.stringify(this.state));
      alert("Successfully signed up! Now you can log in with your new account.");
    }
    */
  }

  setFirstName(e) { this.setState({firstName: e.target.value}); }
  setLastName(e) { this.setState({lastName: e.target.value}); }
  setEmail(e) { this.setState({email: e.target.value}); }
  confirmEmail(e) { this.setState({confirm_e: e.target.value}); }
  setPassword(e) { this.setState({password: e.target.value}); }
  confirmPassword(e) { this.setState({confirm_p: e.target.value}); }
  handleOnlyTourist(e) { this.checkValidity(e, true); }
  handleAlsoTourGuide(e) { this.checkValidity(e, false); }

  render() {
    return (
      <div id="main-frame">
        <div className="sign-up-form">
          <div className="first-name-container">
            <div className="sign-up-text" id="sign-up-first-name">First Name</div>
            <input className="input-text middle-length" type="text" name="first-name" id="first-name-input" placeholder="e.x. John"
              onChange={this.setFirstName}/><br />
          </div>

          <div className="last-name-container">
            <div className="sign-up-text" id="sign-p-last-name">Last Name</div>
            <input className="input-text middle-length" type="text" name="last-name" id="last-name-input" placeholder="e.x. Smith"
              onChange={this.setLastName}/><br />
          </div>

          <div className="email-container">
            <div className="sign-up-text" id="sign-up-email">E-mail Address</div>
            <input className="input-text middle-length" type="email" name="email" id="email-input" placeholder="e.x. jsmith@gmail.com"
              onChange={this.setEmail}/><br />
          </div>

          <div className="email-container">
            <div className="sign-up-text">Confirm E-mail Address</div>
            <input className="input-text middle-length" type="confirm email" name="confirm-email" id="confirm-email-input"
              onChange={this.confirmEmail}/><br />
          </div>

          <div className="signup-third-line">
            <div className="password-container">
              <div className="sign-up-text" id="sign-up-password">Password</div>
              <input className="input-text middle-length" type="password" name="password" id="password-input"
                onChange={this.setPassword}/><br />
            </div>

            <div className="password-container">
              <div className="sign-up-text">Confirm Password</div>
              <input className="input-text middle-length" type="password" name="confirm-password" id="confirm-password-input"
                onChange={this.confirmPassword}/><br />
            </div>
          </div>

          <div className="signup-fourth-line">Will you consider becoming a tour guide?</div>
          <div className="signup-button-container">
            <Link className="pic-text submit-button button-color"
                to="/login/" onClick={this.handleOnlyTourist}>No, I'm only a tourist</Link>
            <Link className="pic-text submit-button button-color" id="guide-sign-up-link"
                to={`/guideSignup/${this.state.email}`} onClick={this.handleAlsoTourGuide}>Sign me up as tour guide too!</Link>
          </div>
        </div>
      </div>
    );
  }
}

// Populate the profile with all current profiles
function mapStateToProps(state, ownProps) {
  return {
    profile: state.profiles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
