import * as types from './actionTypes';
import ScheduleApi from '../api/mockScheduleApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadScheduleSuccess(schedule) {
  return { type: types.LOAD_SCHEDULE, schedule};
}

export function addScheduleSuccess(entry) {
  return { type: types.ADD_SCHEDULE, entry};
}

export function deleteScheduleSuccess(entry) {
  return {type: types.DELETE_SCHEDULE, entry};
}

export function editScheduleSuccess(entry) {
  return {type: types.EDIT_SCHEDULE, entry};
}

export function loadSchedule() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ScheduleApi.getAllSchedule().then(schedule => {
      dispatch(loadScheduleSuccess(schedule));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addSchedule(entry) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
		console.log('aaaa'); 
    return ScheduleApi.addSchedule(entry).then(entry => {
        dispatch(addScheduleSuccess(entry));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function editSchedule(entry) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return ScheduleApi.editSchedule(entry).then(entry => {
        dispatch(editScheduleSuccess(entry));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteSchedule(entry) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return ScheduleApi.deleteSchedule(entry).then(entry => {
        dispatch(deleteScheduleSuccess(entry));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
