import React from 'react';
import "../styles/trips.css";
import TripItem from "./TripItem";

class Trips extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      trips: [
        {
            'name': 'Suzuka',
            'image_address': 'empty_profile_pic.png',
            'date': 'Date: 9/1/2018 - 9/8/2018',
            'action': '>',
            'progress': 'Progress 2/6: Action Needed! Discuss',
            'own_identity': 'tourist'
        },
        {
            'name': 'Kato',
            'image_address': 'empty_profile_pic.png',
            'date': 'Date: 10/3/2018 - 10/7/2018',
            'action': '>',
            'progress': 'Progress 1/6: Action Needed! Accept/Reject',
            'own_identity': 'tour guide'
        },
        {
            'name': 'Shantao',
            'image_address': 'empty_profile_pic.png',
            'date': 'Date: 4/9/2018 - 4/20/2018',
            'action': '<',
            'progress': 'Progress 3/6: Waiting for Resceduling',
            'own_identity': 'tourist'
        },
        {
            'name': 'Chao',
            'image_address': 'empty_profile_pic.png',
            'date': 'Date: 8/1/2018 - 8/8/2018',
            'action': '<',
            'progress': 'Progress 1/6: Waiting to hear back',
            'own_identity': 'tourist'
        }
      ]
    };
    this.removeTripItem = this.removeTripItem.bind(this);
  }

  removeTripItem(name) {
    let newState = this.state;
    let index = newState.trips.findIndex(trip => trip.name === name);
    if (index === -1) return;

    newState.trips.splice(index, 1);
    this.setState(newState);
  }

  render() {
    return (
      <div id="main-frame">
        <div className="trip-container">
          {this.state.trips.map(trip =>
            <TripItem key={trip.name} trip={trip}
              removeTripItem={this.removeTripItem} />
          )}
        </div>
      </div>
    );
  }
}

export default Trips;
