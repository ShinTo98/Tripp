import scheduleReducer from '../scheduleReducer'; 
import * as types from '../../actions/actionTypes'; 
import expect from 'expect'; 

describe('scheduleReducer', () => {
  it('should return the initial state', () => {
    expect(scheduleReducer(undefined, {})).toEqual(
			{
				scheduleMisc: {start: '', end: '', day: ''}, scheduleItems: []
			}
			); 
  }); 

  it('should handle ADD_TODO', () => {
    expect(
      scheduleReducer(undefined, {
        type: types.ADD_SCHEDULE,
        entry: {
					title: 'a', 
					content: 'b', 
					count: 0
				} 
      })
    ).toEqual([
      {
				scheduleMisc: {start: '', end: '', day: ''}, scheduleItems: [
				{
					title: 'a', 
					content: 'b', 
					count: 0
				}
				]
				}
    ]); 

    expect(
      scheduleReducer(
        {
				scheduleMisc: {start: '', end: '', day: ''}, scheduleItems: [
				{
					title: 'a', 
					content: 'b', 
					count: 0
				}
				]
				},
        {
          type: types.DELETE_SCHEDULE,
					entry: {
						count: 0
					} 
        }
      )
    ).toEqual({
				scheduleMisc: {start: '', end: '', day: ''}, scheduleItems: []
			}); 
  }); 
}); 
