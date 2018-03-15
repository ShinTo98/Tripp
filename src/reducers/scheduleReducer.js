import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scheduleReducer(state = initialState.schedule, action) {
  let newState = JSON.parse(JSON.stringify(state)); 
  switch (action.type) {
    case types.ADD_SCHEDULE:
      newState.scheduleItems = [
				...state.scheduleItems, 
				action.entry
				]; 
      return newState;

    case types.DELETE_SCHEDULE:
      newState.scheduleItems = state.scheduleItems.filter(entry => entry.count !== action.entry.count); 
			for (let i = 0; i < newState.scheduleItems.length; i++) {
        newState.scheduleItems[i].count = i; 
      }
			return newState; 

    case types.EDIT_SCHEDULE:
			newState.scheduleItems[action.entry.count] = action.entry; 
			return newState; 

    default:
      return state;
  }
}
