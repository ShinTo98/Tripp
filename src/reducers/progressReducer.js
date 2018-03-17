import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function progressReducer(state = initialState.progress, action) {
  let newState = JSON.parse(JSON.stringify(state)); 
  switch (action.type) {
    case types.LOAD_PROGRESS:
      return action.progress;

    default:
      return state;
  }
}
