import * as types from './actionTypes';
import profileApi from '../api/mockProfileApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadProfileSuccess(profiles) {
  return {type: types.LOAD_PROFILE_SUCCESS, profiles};
}

export function createProfileSuccess(profile) {
  return {type: types.CREATE_PROFILE_SUCCESS, profile};
}

export function updateProfileSuccess(profile) {
  return {type: types.UPDATE_PROFILE_SUCCESS, profile};
}

// Load a certain profile
export function loadProfile() {
  return dispatch => {
    console.log('aaaa'); 
    dispatch(beginAjaxCall());
    return profileApi.getAllProfiles().then(profiles => {
      dispatch(loadProfileSuccess(profiles));
    }).catch(error => {
      throw(error);
    });
  };
}

// Create a certain profile
export function createProfile(profile) {
      //console.log("create");
  return function (dispatch, getState) {
      console.log("create");
    dispatch(beginAjaxCall());
    return profileApi.saveProfile(profile).then(profile => {
      dispatch(createProfileSuccess(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

// Update a certain profile
export function updateProfile(profile) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return profileApi.saveProfile(profile).then(profile => {
      dispatch(updateProfileSuccess(profile));
    }).catch(error => {
      throw(error);
    });
  };
}