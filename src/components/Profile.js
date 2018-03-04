import React from 'react';
import {Link} from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Get all info from the "database" and build the state
    this.state = JSON.parse(localStorage.getItem(this.props.params.value));
  }

  // TODO
  editProfile() {
    if(document.getElementById('edit-button').innerHTML == 'Edit My Profile') {
        var inputs = document.getElementsByTagName('input');
        for(var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
        document.getElementsByTagName('select')[0].disabled = false;
        var hiddens = document.getElementsByClassName('hidden');
        for(var i = 0; i < hiddens.length; i++) {
            hiddens[i].style.display = 'inline';
        }
        document.getElementById('edit-button').innerHTML = 'Save My Edits';
    } else {
        window.alert('Successfully Saved!');
        var inputs = document.getElementsByTagName('input');
        for(var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
        document.getElementsByTagName('select')[0].disabled = true;
        var hiddens = document.getElementsByClassName('hidden');
        for(var i = 0; i < hiddens.length; i++) {
            hiddens[i].style.display = 'none';
        }
        document.getElementById('edit-button').innerHTML = 'Edit My Profile'; 
    }
    
}

  render() {
    return (
      <div id="main-frame">
        <div className="sign-up-form">
          <div className="first-name-container">
            <div className="sign-up-text">First Name</div>
            <input className="input-text middle-length" type="text" name="first-name" id="first-name-input" value={this.state.firstName} disabled/><br />
          </div>

          <div className="last-name-container">
            <div className="sign-up-text">Last Name</div>
            <input className="input-text middle-length" type="text" name="last-name" id="last-name-input" value={this.state.lastName} disabled/><br />
          </div>

          <div className="email-container">
            <div className="sign-up-text">E-mail Address</div>
            <input className="input-text middle-length" type="email" name="email" id="email-input" value={this.state.email} disabled/><br />
          </div>

          <div className="email-container hidden" id="unique">
            <div className="sign-up-text">Confirm E-mail Address</div>
            <input className="input-text middle-length" type="confirm email" name="confirm-email" id="confirm-email-input" disabled/><br />
          </div>

          <div className="signup-third-line">
            <div className="password-container">
              <div className="sign-up-text">Password</div>
              <input className="input-text middle-length" type="password" name="password" id="password-input" value={this.state.password} disabled/><br />
            </div>

            <div className="password-container hidden">
              <div className="sign-up-text">Confirm Password</div>
              <input className="input-text middle-length" type="password" name="confirm-password" id="confirm-password-input"/><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
