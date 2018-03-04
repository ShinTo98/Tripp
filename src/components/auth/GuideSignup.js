import React from 'react';
import {Link} from 'react-router';
import '../../styles/guide_signup.css';

class GuideSignup extends React.Component {
  constructor(props) {
    super(props);
    // Get all info from the "database" and build the state
    this.state = JSON.parse(localStorage.getItem(this.props.params.value));
  }

  checkValidity(e) {
    let checked = true;
    // First check entries
    if(this.state.places == "" || this.state.themes == "" ||
       this.state.description == "" || this.state.fromDate == "" ||
       this.state.toDate == "" || this.state.fromTime == "" ||
       this.state.toTime == "" || this.state.perPlan == "" ||
       this.state.perHour == "") {
      e.preventDefault();
      checked = false;
      alert("Everything needs to be filled out!");
    }

    // If everything is fine, store info and proceed
    this.setState({displayGuideInfo: "block"});
    localStorage.setItem(this.state.email, JSON.stringify(this.state));
    if(checked) {
      alert("Successfully signed up! Now you can log in with your new account.");
    }
  }

  render() {
    return (
      <div id="main-frame">
        <div className="guide-sign-up-form" id="guide-sign-up-form">
          <div className="place-container">
            <div className="sign-up-text">Places Where You Can be A Tour Guide</div>
            <input className="input-text middle-length" type="text" name="places" id="places-input" placeholder="e.x. Beijing, China"
              onChange={(event) => this.setState({places: event.target.value})}/><br />
          </div>

          <div className="place-container">
            <div className="sign-up-text">Theme(s) of Your Guided Tour</div>
            <input className="input-text middle-length" type="text" name="themes" id="themes-input" placeholder="e.x. Culture"
              onChange={(event) => this.setState({themes: event.target.value})}/><br />
          </div>

          <div className="description-container">
            <div className="sign-up-text">Description as A Tour Guide</div>
            <textarea className="signup-textarea" name="description" id="description-input" rows="6" cols="60" placeholder="Tell Us About Yourself"
              onChange={(event) => this.setState({description: event.target.value})}/><br />
          </div>

          <div className="date-container">
            <div className="sign-up-text">Please Specify Your Available Dates:</div>
            <div className="date-line">
              <div className="middle-text from-text">From</div>
              <input className="input-text tiny-length" type="date" name="from-date" id="from-date-input"
                onChange={(event) => this.setState({fromDate: event.target.value})}/><br />
              <div className="middle-text">to</div>
              <input className="input-text tiny-length" type="date" name="to-date" id="to-date-input"
                onChange={(event) => this.setState({toDate: event.target.value})}/><br />
            </div>
          </div>

          <div className="time-container">
            <div className="sign-up-text">Please Also Specify Your Available Time for Each Day:</div>
            <div className="date-line">
              <div className="middle-text from-text">From</div>
              <input className="input-text tiny-length-time" type="time" name="from-time" id="from-time-input"
                onChange={(event) => this.setState({fromTime: event.target.value})}/>
              <div className="middle-text">to</div>
              <input className="input-text tiny-length-time" type="time" name="to-time" id="to-time-input"
                onChange={(event) => this.setState({toTime: event.target.value})}/><br />
            </div>
          </div>

          <div className="time-container">
            <div className="sign-up-text separate">Please Provide Pricing for Your Service:</div>
            <div className="date-line">
              <div className="middle-text from-text">$</div>
              <input className="input-text tinytiny-length" type="number" name="plan-price" id="min-price-input"
                onChange={(event) => this.setState({perPlan: event.target.value})}/>
              <div className="middle-text">per Plan</div><br />
            </div><br />
            <div className="date-line">
              <div className="middle-text from-text">$</div>
              <input className="input-text tinytiny-length" type="number" name="accompany-price" id="max-price-input"
                onChange={(event) => this.setState({perHour: event.target.value})}/>
              <div className="middle-text">per Hour if Accompany During the Tour</div><br />
            </div>
          </div>

            <div className="signup-button-container">
              <Link className="pic-text submit-button button-color"
                to="/login/" onClick={(e) => this.checkValidity(e)}>Sign Me Up!</Link>
            </div>
    
            <div className="go-back-button-container">
              <Link className="pic-text submit-button button-color"
                to="/signup/">Back to General Sign Up</Link>
            </div>
        </div>

    </div>
    );
  }
}

export default GuideSignup;
