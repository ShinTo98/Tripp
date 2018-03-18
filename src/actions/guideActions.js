import * as types from './actionTypes';
import guideApi from '../api/mockGuideApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadGuidesSuccess(guides) {
  return {type: types.LOAD_GUIDE_SUCCESS, guides};
}

// export function createGuideSuccess(guide) {
//   return {type: types.CREATE_GUIDE_SUCCESS, guide};
// }

// export function updateGuideSuccess(guide) {
//   return {type: types.UPDATE_GUIDE_SUCCESS, guide};
// }


export function loadGuides() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return guideApi.getAllGuides().then(guides => {
      dispatch(loadGuidesSuccess(guides));
    }).catch(error => {
      throw(error);
    });
  };
}