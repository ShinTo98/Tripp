import * as types from './actionTypes';
import ChatApi from '../api/mockChatApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadChatSuccess(chat) {
  return { type: types.LOAD_CHAT, chat};
}

export function addChatSuccess(entry) {
  return { type: types.ADD_CHAT, entry};
}

export function loadChat() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ChatApi.getAllChat().then(chat => {
      dispatch(loadChatSuccess(chat));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addChat(entry) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return ChatApi.addChat(entry).then(entry => {
        dispatch(addChatSuccess(entry));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
