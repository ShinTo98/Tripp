import React from 'react';

class GuideSignupInfo extends React.Component {
  render() {
    return (
        <div id="main-frame">
            <form className="guide-sign-up-form" id="guide-sign-up-form" onsubmit="checkForm()">
                <div className="place-container">
                    <div className="sign-up-text">Places Where You Can be A Tour Guide</div>
                    <input className="input-text middle-length" type="text" name="places" id="places-input" placeholder="e.x. Beijing, China" /><br />
                </div>

                <div className="place-container">
                    <div className="sign-up-text">Theme(s) of Your Guided Tour</div>
                    <input className="input-text middle-length" type="text" name="themes" id="themes-input" placeholder="e.x. Culture" /><br />
                </div>

                <div className="description-container">
                    <div className="sign-up-text">Description as A Tour Guide</div>
                    <textarea className="signup-textarea" form="guide-sign-up-form" name="description" id="description-input" rows="6" cols="60" placeholder="Tell Us About Yourself" /><br />
                </div>

                <div className="date-container">
                    <div className="sign-up-text">Please Specify Your Available Dates:</div>
                    <div className="date-line">
                        <div className="middle-text from-text">From</div>
                        <input className="input-text tiny-length" type="date" name="from-date" id="from-date-input" />
                        <div className="middle-text">to</div>
                        <input className="input-text tiny-length" type="date" name="to-date" id="to-date-input" /><br />
                    </div>
                </div>

                <div className="time-container">
                    <div className="sign-up-text">Please Also Specify Your Available Time for Each Day:</div>
                    <div className="date-line">
                        <div className="middle-text from-text">From</div>
                        <input className="input-text tiny-length-time" type="time" name="from-time" id="from-time-input" />
                        <div className="middle-text">to</div>
                        <input className="input-text tiny-length-time" type="time" name="to-time" id="to-time-input" /><br />
                    </div>
                </div>

                <div className="time-container">
                    <div className="sign-up-text separate">Please Provide Pricing for Your Service:</div>
                    <div className="date-line">
                        <div className="middle-text from-text">$</div>
                        <input className="input-text tinytiny-length" type="number" name="plan-price" id="min-price-input" />
                        <div className="middle-text">per Plan</div><br />
                    </div><br />
                    <div className="date-line">
                        <div className="middle-text from-text">$</div>
                        <input className="input-text tinytiny-length" type="number" name="accompany-price" id="max-price-input" />
                        <div className="middle-text">per Hour if Accompany During the Tour</div><br />
                    </div>
                </div>

                <div className="signup-button-container">
                    <input className="pic-text submit-button button-color" type="submit"
                        formaction="./profile.html" value="Sign Me Up!" />
                </div>
        
                <div className="go-back-button-container">
                    <button type="submit" className="pic-text submit-button button-color"
                        formaction="./signup.html">Back to General Sign Up</button>
                </div>
            </form>

        </div>
    );
  }
}

export default GuideSignupInfo;
