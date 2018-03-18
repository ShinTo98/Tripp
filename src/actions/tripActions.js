import * as types from './actionTypes';
import tripApi from '../api/mockTripApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadTripsSuccess(trips) {
  return {type: types.LOAD_TRIP_SUCCESS, trips};
}

// export function createTripSuccess(trip) {
//   return {type: types.CREATE_TRIP_SUCCESS, trip};
// }

// export function updateTripSuccess(trip) {
//   return {type: types.UPDATE_TRIP_SUCCESS, trip};
// }

export function deleteTripSuccess(trip) {
  return {type: types.DELETE_TRIP_SUCCESS, trip};
}

export function loadTrips() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return tripApi.getAllTrips().then(trips => {
      dispatch(loadTripsSuccess(trips));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteTrip(tripId) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return tripApi.deleteTrip(tripId).then(tripId => {
      dispatch(deleteTripSuccess(tripId))
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}