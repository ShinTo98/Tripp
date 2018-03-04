import React from 'react';
import {Link} from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Get all info from the "database" and build the state
    this.state = JSON.parse(localStorage.getItem(this.props.params.value));
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

          <div className="tour-guide-info" style={{display: `${this.state.displayGuideInfo}`}}>
            <div className="place-container tour-guide-info">
              <div className="sign-up-text">Your Info As a Tour Guide: </div>
            </div>

            <div className="place-container">
              <div className="sign-up-text">Places Where You Can be A Tour Guide</div>
              <input className="input-text middle-length" type="text" name="places" id="places-input" value={this.state.places} disabled/><br />
            </div>

            <div className="place-container">
              <div className="sign-up-text">Theme(s) of Your Guided Tour</div>
              <input className="input-text middle-length" type="text" name="themes" id="themes-input" value={this.state.themes} disabled/><br />
            </div>

            <div className="description-container">
              <div className="sign-up-text">Description as A Tour Guide</div>
              <textarea className="signup-textarea" name="description" id="description-input" rows="6" cols="60" value={this.state.description} disabled></textarea><br />
            </div>

            <div className="date-container">
              <div className="sign-up-text">Please Specify Your Available Dates:</div>
              <div className="date-line">
                <div className="middle-text from-text">From</div>
                <input className="input-text tiny-length" type="date" name="date" id="from-date-input" value={this.state.fromDate} disabled/>
                <div className="middle-text">to</div>
                <input className="input-text tiny-length" type="date" name="date" id="to-date-input" value={this.state.toDate} disabled/><br />
              </div>
            </div>

            <div className="time-container">
              <div className="sign-up-text">Please Also Specify Your Available Time for Each Day:</div>
              <div className="date-line">
                <div className="middle-text from-text">From</div>
                <input className="input-text tiny-length-time" type="time" name="date" id="from-time-input" value={this.state.fromTime} disabled/>
                <div className="middle-text">to</div>
                <input className="input-text tiny-length-time" type="time" name="date" id="to-time-input" value={this.state.toTime} disabled/><br />
              </div>
            </div>

            <div className="time-container">
              <div className="sign-up-text separate">Please Provide Pricing for Your Service:</div>
              <div className="date-line">
                <div className="middle-text from-text">$</div>
                <input className="input-text tinytiny-length" type="number" name="date" id="plan-price-input" value={this.state.perPlan} disabled/>
                <div className="middle-text">per Plan</div><br />
              </div><br />
              <div className="date-line">
                <div className="middle-text from-text">$</div>
                <input className="input-text tinytiny-length" type="number" name="date" id="accompany-price-input" value={this.state.perHour} disabled/>
                <div className="middle-text">per Hour if Accompany During the Tour</div><br />
              </div>
            </div> 
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
