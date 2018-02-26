import React from 'react';
import "../styles/general.css";
import "../styles/trips.css";

class Trips extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      trips: [
        {
            'name': 'Suzuka',
            'image_address': 'image/empty_profile_pic.png',
            'date': 'Date: 9/1/2018 - 9/8/2018',
            'action': '&gt;',
            'progress': 'Progress 2/6: Action Needed! Discuss',
            'own_identity': 'tourist'
        },
        {
            'name': 'Kato',
            'image_address': 'image/empty_profile_pic.png',
            'date': 'Date: 10/3/2018 - 10/7/2018',
            'action': '&gt;',
            'progress': 'Progress 1/6: Action Needed! Accept/Reject',
            'own_identity': 'tour guide'
        },
        {
            'name': 'Shantao',
            'image_address': 'image/empty_profile_pic.png',
            'date': 'Date: 4/9/2018 - 4/20/2018',
            'action': '&lt;',
            'progress': 'Progress 3/6: Waiting for Resceduling',
            'own_identity': 'tourist'
        },
        {
            'name': 'Chao',
            'image_address': 'image/empty_profile_pic.png',
            'date': 'Date: 8/1/2018 - 8/8/2018',
            'action': '&lt;',
            'progress': 'Progress 1/6: Waiting to hear back',
            'own_identity': 'tourist'
        }
      ]
    };
  }
  componentDidMount() {
    this.loadTrips();
  }

  // load results of trip tour guides at the given location
  loadTrips() {

    // parse user search params
    let urlParams = new URLSearchParams(window.location.search);
    // let ? = urlParams.get('');

    let trip_container = document.getElementsByClassName('trip-container')[0];

    this.state.trips.forEach( (trip) => {

      // display trip
      let trip_div = document.createElement('div');
      trip_div.className = 'trip';

      let image = document.createElement('img');
      image.setAttribute('src', trip['image_address']);
      image.setAttribute('alt', 'image here');

      let name = document.createElement('div');
      name.className = 'trip-others-name';
      name.innerHTML = trip['name'];

      let date = document.createElement('div');
      date.className = 'trip-date';
      date.innerHTML = trip['date'];

      let action = document.createElement('div');
      action.className = 'trip-action-needed';
      action.innerHTML = trip['action'];
      
      let progress = document.createElement('div');
      progress.className = 'trip-progress';
      progress.innerHTML = trip['progress'];

      let schedule_link = document.createElement('a');
      schedule_link.className = 'nav-text a-link-style';
      schedule_link.setAttribute('href', '/schedule.html?as=' + trip['own_identity']
          + '&other=' + trip['name']);
      schedule_link.innerHTML = 'Schedule';

      let progress_link = document.createElement('a');
      progress_link.className = 'nav-text a-link-style';
      progress_link.setAttribute('href', '/progress.html?as=' + trip['own_identity']
          + '&other=' + trip['name']);
      progress_link.innerHTML = 'Progress';
      
      let delete_link = document.createElement('button');
      delete_link.className = 'nav-text a-link-style';
      delete_link.setAttribute('onclick', 'deleteTrip(' + '"' + trip['name'] + '"' + ')');
      delete_link.innerHTML = 'delete';

      trip_div.appendChild(image);
      trip_div.appendChild(name);
      trip_div.appendChild(date);
      trip_div.appendChild(action);
      trip_div.appendChild(progress);
      trip_div.appendChild(schedule_link);
      trip_div.appendChild(progress_link);
      trip_div.appendChild(delete_link);
      
      trip_container.appendChild(trip_div);
    });
  }

  removeTrips() {
    let trip_container = document.getElementsByClassName('trip-container')[0];
    while (trip_container.firstChild) {
        trip_container.removeChild(trip_container.firstChild);
    }
  }

  deleteTrip(name) {
    this.state.trips.forEach( (part, index) => {
        if (part['name'] !== name) return;
        this.state.trips.splice(index, 1);
    });

    this.removeTrips();
    this.loadTrips();
  }

  render() {
    return (
      <div id="main-frame">
        <div className="trip-container"></div>
      </div>
    );
  }
}

export default Trips;
