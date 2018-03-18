import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const trips = [
  {
    id: 'Suzuka 9/1/2018 - 9/8/2018',
    'name': 'Suzuka',
    'image_address': 'empty_profile_pic.png',
    'date': '9/1/2018 - 9/8/2018',
    'action': '>',
    'progress': 'Progress 2/6: Action Needed! Discuss',
    'own_identity': 'tourist'
  },
  {
    id: 'Kato 10/3/2018 - 10/7/2018',
    'name': 'Kato',
    'image_address': 'empty_profile_pic.png',
    'date': '10/3/2018 - 10/7/2018',
    'action': '>',
    'progress': 'Progress 1/6: Action Needed! Accept/Reject',
    'own_identity': 'tour guide'
  },
  {
    id: 'Shantao 4/9/2018 - 4/20/2018',
    'name': 'Shantao',
    'image_address': 'empty_profile_pic.png',
    'date': '4/9/2018 - 4/20/2018',
    'action': '<',
    'progress': 'Progress 3/6: Waiting for Resceduling',
    'own_identity': 'tourist'
  },
  {
    id: 'Chao 8/1/2018 - 8/8/2018',
    'name': 'Chao',
    'image_address': 'empty_profile_pic.png',
    'date': '8/1/2018 - 8/8/2018',
    'action': '<',
    'progress': 'Progress 1/6: Waiting to hear back',
    'own_identity': 'tourist'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (trip) => {
  return trip.name + " " + trip.date;
};

class TripApi {
  static getAllTrips() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], trips));
      }, delay);
    });
  }


  static saveTrip(trip) {
    trip = Object.assign({}, trip); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        // Simulate server-side validation
        if (trip.name.length < 1 || trip.date.length < 1 || trip.action.length < 1
            || trip.progress.length < 1 || trip.own_identity.length < 1) {
          reject("trip is invalid");
        }

        if (trip.id) {
          const existingTripIndex = trips.findIndex(a => a.id == trip.id);
          trips.splice(existingTripIndex, 1, trip);
        } else {

          //Just simulating creation here.
          //The server would generate ids for new trips in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          trip.id = generateId(trip);
          trips.push(trip);
        }

        resolve(trip);
      }, delay);
    });
  }

  static deleteTrip(tripId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTripToDelete = trips.findIndex(trips => {
          return trips.id == tripId;
        });
        trips.splice(indexOfTripToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TripApi;
