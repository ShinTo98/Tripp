import {combineReducers} from 'redux';
/*
import courses from './courseReducer';
import authors from './authorReducer';
*/
import schedule from './scheduleReducer'; 
import guides from './guideReducer'; 
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  schedule,
  guides,
  ajaxCallsInProgress
});

export default rootReducer;
