import * as types from './actionTypes';
import ProgressApi from '../api/mockProgressApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadProgressSuccess(progress) {
  return { type: types.LOAD_PROGRESS, progress};
}

export function loadProgress() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ProgressApi.getAllProgress().then(progress => {
      dispatch(loadProgressSuccess(progress));
    }).catch(error => {
      throw(error);
    });
  };
}

