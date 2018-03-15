import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function addSchedule(entry) {
  return { type: types.ADD_SCHEDULE, entry};
}

export function deleteSchedule(entry) {
  return {type: types.DELETE_SCHEDULE, entry};
}

export function editSchedule(entry) {
  return {type: types.EDIT_SCHEDULE, entry};
}

