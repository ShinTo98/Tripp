import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function guideReducer(state = initialState.guides, action) {
  switch (action.type) {
    case types.LOAD_GUIDE_SUCCESS:
      return action.guides;

    // case types.CREATE_GUIDE_SUCCESS:
    //   return [
    //     ...state,
    //     Object.assign({}, action.guides)
    //   ];

    // case types.UPDATE_GUIDE_SUCCESS:
    //   return [
    //     ...state.filter(guide => guide.id !== action.guide.id),
    //     Object.assign({}, action.guide)
    //   ];

    default:
      return state;
    }
}