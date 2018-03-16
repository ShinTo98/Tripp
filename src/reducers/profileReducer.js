import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function profileReducer(state = initialState.profile, action) {
  let newState = JSON.parse(JSON.stringify(state)); 
  switch (action.type) {
    // Successfully loaded the profile, return the data passed in
    case types.LOAD_PROFILE_SUCCESS:
      return action.profile;

    // In case of create or update, return the new state
    case types.CREATE_PROFILE_SUCCESS:
    case types.UPDATE_PROFILE_SUCCESS:
      return newState; 

    default:
      return state;
  }
}