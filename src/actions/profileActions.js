import * as types from './actionTypes';
import profileApi from '../api/mockProfileApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadProfileSuccess(profile) {
  return {type: types.LOAD_PROFILE_SUCCESS, profile};
}

export function createProfileSuccess(profile) {
  return {type: types.CREATE_PROFILE_SUCCESS, profile};
}

export function updateProfileSuccess(profile) {
  return {type: types.UPDATE_PROFILE_SUCCESS, profile};
}

// Load a certain profile
export function loadProfile(profileId) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return profileApi.getProfilebyId(profileId).then(profile => {
      dispatch(loadProfileSuccess(profile));
    }).catch(error => {
      throw(error);
    });
  };
}