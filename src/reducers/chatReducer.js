import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatReducer(state = initialState.chat, action) {
  let newState = JSON.parse(JSON.stringify(state)); 
  switch (action.type) {
    case types.LOAD_CHAT:
      return action.chat;

    case types.ADD_CHAT:
      newState.chatContent = [
				...state.chatContent, 
				action.entry
				]; 
      return newState;

    default:
      return state;
  }
}
