import React from 'react';
import {Link} from 'react-router';
import '../styles/welcome.css';
import '../styles/general.css';

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="welcome-body">
        <a className="nav-text pic-text button-color signup-login" href="./login.html">Log In</a>
        <a className="nav-text pic-text button-color signup-login" href="./signup.html">Sign Up</a>

        <div className="middle-frame">
          <div className="center-welcome-logo">
              <div className="welcome-logo pic-text">Tripp</div>
          </div>
          <div className="center-welcome-description">
              <div className="welcome-description pic-text">Visit anywhere, any way you want</div>
          </div>

          <form className="welcome-search pic-text" action="search_result.html">
              <div className="search-text">Where:</div>
              <input type="text" name="destination" id="destination-input" placeholder="e.x. San Diego" /><br />
              <div className="search-text">When:</div>
              <input type="text" name="start-time" placeholder="e.x. 01/27/2018"/> &nbsp;to&nbsp;
              <input type="text" name="end-time" placeholder="e.x. 01/30/2018"/><br />
              <input type="submit" value="Start My Trip!" />
          </form>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
