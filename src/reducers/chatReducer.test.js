import chatReducer from './chatReducer'; 
import * as types from './../actions/actionTypes'; 
import expect from 'expect'; 

describe('chatReducer', () => {
  it('should return the initial state', () => {
    expect(chatReducer(undefined, {})).toEqual(
			{chatContent: []}
			); 
  }); 

  it('should add entru', () => {
    expect(
      chatReducer(undefined, {
        type: types.ADD_CHAT,
        entry: {
					content: 'b', 
					side: 'user-msg', 
					count: 0
				} 
      })
    ).toEqual(
      {
				chatContent: [
					{
						content: 'b', 
						side: 'user-msg', 
						count: 0
					} 

				]
			}
    ); 
	}); 
}); 
