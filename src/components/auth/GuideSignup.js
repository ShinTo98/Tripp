import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import '../../styles/guide_signup.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileActions from '../../actions/profileActions';

class GuideSignup extends React.Component {
  constructor(props) {
    super(props);
    // Get all info and build the updated state
    //console.log(props.profile);
    // this.state = Object.assign({}, props.profile);
    this.state = {
      places: "",
      themes: "",
      description: "",
      fromDate: "",
      toDate: "",
      fromTime: "",
      toTime: "",
      perPlan: "",
      perHour: ""
    };

    this.setPlaces = this.setPlaces.bind(this);
    this.setThemes = this.setThemes.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setFromDate = this.setFromDate.bind(this);
    this.setToDate = this.setToDate.bind(this);
    this.setFromTime = this.setFromTime.bind(this);
    this.setToTime = this.setToTime.bind(this);
    this.setPerPlan = this.setPerPlan.bind(this);
    this.setPerHour = this.setPerHour.bind(this);
    this.check = this.check.bind(this);
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
    if (checked) {
    this.props.actions.updateProfile({
      //id: this.props.profile.id,
      firstName: this.props.profile.firstName,
      lastName: this.props.profile.lastName,
      password: this.props.profile.password,
      places: this.state.places,
      themes: this.state.themes,
      description: this.state.description,
      fromDate: this.state.fromDate,
      toDate: this.state.toDate,
      fromTime: this.state.fromTime,
      toTime: this.state.toTime,
      perPlan: this.state.perPlan,
      perHour: this.state.perHour
    });}

    if(checked) {
      alert("Successfully signed up! Now you can log in with your new account.");
    }
  }

  setPlaces(e) { this.setState({places: e.target.value}); }
  setThemes(e) { this.setState({themes: e.target.value}); }
  setDescription(e) { this.setState({description: e.target.value}); }
  setFromDate(e) { this.setState({fromDate: e.target.value}); }
  setToDate(e) { this.setState({toDate: e.target.value}); }
  setFromTime(e) { this.setState({fromTime: e.target.value}); }
  setToTime(e) { this.setState({toTime: e.target.value}); }
  setPerPlan(e) { this.setState({perPlan: e.target.value}); }
  setPerHour(e) { this.setState({perHour: e.target.value}); }
  check(e) {this.checkValidity(e);}

  render() {
    return (
      <div id="main-frame">
        <div className="guide-sign-up-form" id="guide-sign-up-form">
          <div className="place-container">
            <div className="sign-up-text">Places Where You Can be A Tour Guide</div>
            <input className="input-text middle-length" type="text" name="places" id="places-input" placeholder="e.x. Beijing, China"
              onChange={this.setPlaces}/><br />
          </div>

          <div className="place-container">
            <div className="sign-up-text">Theme(s) of Your Guided Tour</div>
            <input className="input-text middle-length" type="text" name="themes" id="themes-input" placeholder="e.x. Culture"
              onChange={this.setThemes}/><br />
          </div>

          <div className="description-container">
            <div className="sign-up-text">Description as A Tour Guide</div>
            <textarea className="signup-textarea" name="description" id="description-input" rows="6" cols="60" placeholder="Tell Us About Yourself"
              onChange={this.setDescription}/><br />
          </div>

          <div className="date-container">
            <div className="sign-up-text">Please Specify Your Available Dates:</div>
            <div className="date-line">
              <div className="middle-text from-text">From</div>
              <input className="input-text tiny-length" type="date" name="from-date" id="from-date-input"
                onChange={this.setFromDate}/><br />
              <div className="middle-text">to</div>
              <input className="input-text tiny-length" type="date" name="to-date" id="to-date-input"
                onChange={this.setToDate}/><br />
            </div>
          </div>

          <div className="time-container">
            <div className="sign-up-text">Please Also Specify Your Available Time for Each Day:</div>
            <div className="date-line">
              <div className="middle-text from-text">From</div>
              <input className="input-text tiny-length-time" type="time" name="from-time" id="from-time-input"
                onChange={this.setFromTime}/>
              <div className="middle-text">to</div>
              <input className="input-text tiny-length-time" type="time" name="to-time" id="to-time-input"
                onChange={this.setToTime}/><br />
            </div>
          </div>

          <div className="time-container">
            <div className="sign-up-text separate">Please Provide Pricing for Your Service:</div>
            <div className="date-line">
              <div className="middle-text from-text">$</div>
              <input className="input-text tinytiny-length" type="number" name="plan-price" id="min-price-input"
                onChange={this.setPerPlan}/>
              <div className="middle-text">per Plan</div><br />
            </div><br />
            <div className="date-line">
              <div className="middle-text from-text">$</div>
              <input className="input-text tinytiny-length" type="number" name="accompany-price" id="max-price-input"
                onChange={this.setPerHour}/>
              <div className="middle-text">per Hour if Accompany During the Tour</div><br />
            </div>
          </div>

            <div className="signup-button-container">
              <Link className="pic-text submit-button button-color"
                to="/login/" onClick={this.check}>Sign Me Up!</Link>
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

GuideSignup.propTypes = {
  params: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

// Helper function to get the correct profile
function getProfileById(profiles, id) {
  const profile = profiles.filter(profile => profile.id == id);
  if (profile) return profile[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  // Use id passed in from login to find the correct profile
  const profileId = ownProps.params.value;
  let profile = getProfileById(state.profiles, profileId);

  return {
    profile: profile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GuideSignup);
