import React from 'react';
import { Link, Redirect, browserHistory } from 'react-router';
import style from '../styles/welcome.module.css';

class WelcomePage extends React.Component {
  
  constructor(props) {
    super(props);

    // save the search form inputs
    this.state = {
      destination: "",
      start_time: "",
      end_time: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.setDestination = this.setDestination.bind(this);
    this.setStartTime = this.setStartTime.bind(this);
    this.setEndTime = this.setEndTime.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();

    // form input check
    if (this.state.destination == undefined || this.state.destination == "") {
      alert("Destination required!");
      return;
    }

    browserHistory.push("/searchResult?"
      + "destination=" + this.state.destination
      + "&start-time=" + this.state.start_time
      + "&end-time=" + this.state.end_time
    );
  }

  setDestination(e) { this.setState({ destination: e.target.value }); }
  setStartTime(e) { this.setState({ start_time: e.target.value }); }
  setEndTime(e) { this.setState({ end_time: e.target.value }); }
  
  render() {
    return (
      <div className={style.body}>
        <Link className={style.signupLogin} to="/login">Log In</Link>
        <Link className={style.signupLogin} to="/signup">Sign Up</Link>

        <div className={style.middleFrame}>
          <div className={style.centerLogo}>
              <div className="pic-text"><div className={style.logo}>Tripp</div></div>
          </div>
          <div className={style.centerDescription}>
              <div className="pic-text"><div className={style.description}>Visit anywhere, any way you want</div></div>
          </div>

          <form id="searchForm" className="welcome-search pic-text" onSubmit={this.handleSearch}>
              <div className={style.searchText}>Where:</div>
              <input className={`${style.input} ${style.destinationInput}`} type="text" name="destination" placeholder="e.x. San Diego"
                value={this.state.destination}
                onChange={this.setDestination}
              /><br />
              <div className={style.searchText}>When:</div>
              <input className={style.input} type="text" name="start-time" placeholder="e.x. 01/27/2018"
                value={this.state.start_time}
                onChange={this.setStartTime}
              /> &nbsp;to&nbsp;
              <input className={style.input} type="text" name="end-time" placeholder="e.x. 01/30/2018"
                value={this.state.end_time}
                onChange={this.setEndTime}
              /><br />
              <input type="submit" value="Start My Trip!" />
          </form>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
