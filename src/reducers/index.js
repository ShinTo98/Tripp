import {combineReducers} from 'redux';
/*
import courses from './courseReducer';
import authors from './authorReducer';
*/
import schedule from './scheduleReducer'; 
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  schedule, 
  ajaxCallsInProgress
});

export default rootReducer;
