import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function profileReducer(state = initialState.profiles, action) {
  switch (action.type) {
    // Successfully loaded the profile, return the data passed in
    case types.LOAD_PROFILE_SUCCESS:
      console.log("yyeah!");
      return action.profiles;

    // In case of create add the new profile
    case types.CREATE_PROFILE_SUCCESS:
      console.log("yeah!");
      return [
        ...state,
        Object.assign({}, action.profile)
      ];

    case types.UPDATE_PROFILE_SUCCESS:
      return [
        ...state.filter(profile => profile.id !== action.profile.id),
        Object.assign({}, action.profile)
      ]; 

    default:
      return state;
  }
}