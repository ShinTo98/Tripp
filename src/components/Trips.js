import React from 'react';
import "../styles/general.css";
import "../styles/trips.css";
import TripListRow from "./TripListRow";

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

  //? TO FIX ME TODO
  // removeTrips() {
  //   let trip_container = document.getElementsByClassName('trip-container')[0];
  //   while (trip_container.firstChild) {
  //       trip_container.removeChild(trip_container.firstChild);
  //   }
  // }

  // deleteTrip() {
  //   name = this.toDelete;
  //   this.state.trips.forEach( (part, index) => {
  //       if (part['name'] !== name) return;
  //       this.state.trips.splice(index, 1);
  //   });

  //   this.removeTrips();
  //   this.loadTrips();
  // }

  render() {
    return (
      <div id="main-frame">
        <div className="trip-container">
          {this.trips.map(trip =>
            <TripListRow trip={trip}/>
          )}
        </div>
      </div>
    );
  }
}

export default Trips;
