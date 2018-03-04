import React from 'react';
import { Link, Redirect, browserHistory } from 'react-router';
import '../styles/welcome.css';

class WelcomePage extends React.Component {
  
  constructor(props) {
    super(props);

    // save the search form inputs
    this.state = {
      redirect: false,
      search: {
        destination: "",
        start_time: "",
        end_time: ""
      }
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();

    // form input check
    if (this.state.destination == undefined) {
      return;
    }

    browserHistory.push("/searchResult?"
      + "destination=" + this.state.destination
      + "&start-time=" + this.state.start_time
      + "&end-time=" + this.state.end_time
  );
  }

  render() {
    return (
      <div className="welcome-body">
        <Link className="nav-text pic-text button-color signup-login" to="/login">Log In</Link>
        <Link className="nav-text pic-text button-color signup-login" to="/signup">Sign Up</Link>

        <div className="middle-frame">
          <div className="center-welcome-logo">
              <div className="welcome-logo pic-text">Tripp</div>
          </div>
          <div className="center-welcome-description">
              <div className="welcome-description pic-text">Visit anywhere, any way you want</div>
          </div>

          <form id="searchForm" className="welcome-search pic-text" onSubmit={this.handleSearch}>
              <div className="search-text">Where:</div>
              <input className="welcome-input" type="text" name="destination" id="destination-input" placeholder="e.x. San Diego"
                value={this.state.destination}
                onChange={(e) => this.setState({ destination: e.target.value })}
              /><br />
              <div className="search-text">When:</div>
              <input className="welcome-input" type="text" name="start-time" placeholder="e.x. 01/27/2018"
                value={this.state.start_time}
                onChange={(e) => this.setState({ start_time: e.target.value })}
              /> &nbsp;to&nbsp;
              <input className="welcome-input" type="text" name="end-time" placeholder="e.x. 01/30/2018"
                value={this.state.end_time}
                onChange={(e) => this.setState({ end_time: e.target.value })}
              /><br />
              <input type="submit" value="Start My Trip!" />
          </form>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
