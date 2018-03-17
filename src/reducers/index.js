import {combineReducers} from 'redux';
/*
import courses from './courseReducer';
import authors from './authorReducer';
*/
import chat from './chatReducer'; 
import progress from './progressReducer'; 
import schedule from './scheduleReducer'; 
import guides from './guideReducer'; 
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	chat, 
	progress, 
  schedule,
  guides,
  ajaxCallsInProgress
});

export default rootReducer;
