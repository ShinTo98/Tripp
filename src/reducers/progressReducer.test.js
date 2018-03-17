import progressReducer from './progressReducer'; 
import * as types from './../actions/actionTypes'; 
import expect from 'expect'; 

describe('progressReducer', () => {
  it('should return the initial state', () => {
    expect(progressReducer(undefined, {})).toEqual(
			{todoRight: [], todoLeft: []}); 
  }); 

}); 
