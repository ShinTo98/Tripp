import React from 'react';
import {Link} from 'react-router';

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
    } else if(this.state.password!= this.state.confirm_p) {
      e.preventDefault();
      checked = false;
      alert("Password not the same as confirmed!");
    } else if(localStorage.getItem(this.state.email)) {
      e.preventDefault();
      checked = false;
      alert("Account already exists! Please use a different e-mail address.");
    }

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
  }


  render() {
    return (
      <div id="main-frame">
        <div className="sign-up-form">
          <div className="first-name-container">
            <div className="sign-up-text">First Name</div>
            <input className="input-text middle-length" type="text" name="first-name" id="first-name-input" placeholder="e.x. John"
              onChange={(event) => this.setState({firstName: event.target.value})}/><br />
          </div>

          <div className="last-name-container">
            <div className="sign-up-text">Last Name</div>
            <input className="input-text middle-length" type="text" name="last-name" id="last-name-input" placeholder="e.x. Smith"
              onChange={(event) => this.setState({lastName: event.target.value})}/><br />
          </div>

          <div className="email-container">
            <div className="sign-up-text">E-mail Address</div>
            <input className="input-text middle-length" type="email" name="email" id="email-input" placeholder="e.x. jsmith@gmail.com"
              onChange={(event) => this.setState({email: event.target.value})}/><br />
          </div>

          <div className="email-container">
            <div className="sign-up-text">Confirm E-mail Address</div>
            <input className="input-text middle-length" type="confirm email" name="confirm-email" id="confirm-email-input"
              onChange={(event) => this.setState({confirm_e: event.target.value})}/><br />
          </div>

          <div className="signup-third-line">
            <div className="password-container">
              <div className="sign-up-text">Password</div>
              <input className="input-text middle-length" type="password" name="password" id="password-input"
                onChange={(event) => this.setState({password: event.target.value})}/><br />
            </div>

            <div className="password-container">
              <div className="sign-up-text">Confirm Password</div>
              <input className="input-text middle-length" type="password" name="confirm-password" id="confirm-password-input"
                onChange={(event) => this.setState({confirm_p: event.target.value})}/><br />
            </div>
          </div>

          <div className="signup-fourth-line">Will you consider becoming a tour guide?</div>
          <div className="signup-button-container">
            <Link className="pic-text submit-button button-color"
                to="/login/" onClick={(e) => this.checkValidity(e, true)}>No, I'm only a tourist</Link>
            <Link className="pic-text submit-button button-color"
                to={`/guideSignup/${this.state.email}`} onClick={(e) => this.checkValidity(e, false)}>Sign me up as tour guide too!</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
