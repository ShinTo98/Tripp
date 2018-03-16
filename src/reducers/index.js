import {combineReducers} from 'redux';
/*
import courses from './courseReducer';
import authors from './authorReducer';
*/
import schedule from './scheduleReducer'; 
import guide from './guideReducer'; 
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  schedule,
  guide,
  ajaxCallsInProgress
});

export default rootReducer;
