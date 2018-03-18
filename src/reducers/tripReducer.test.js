import tripReducer from './tripReducer'; 
import * as types from './../actions/actionTypes'; 
import expect from 'expect'; 

describe('tripReducer', () => {
  it('should return the correct state', () => {
    expect(tripReducer(undefined, {})).toEqual([]);
    
    expect(tripReducer([],
      {
        type: types.LOAD_TRIP_SUCCESS,
        trips: [{
          id: 'Suzuka 9/1/2018 - 9/8/2018',
          'name': 'Suzuka',
          'image_address': 'empty_profile_pic.png',
          'date': '9/1/2018 - 9/8/2018',
          'action': '>',
          'progress': 'Progress 2/6: Action Needed! Discuss',
          'own_identity': 'tourist'
        }]
      })
    ).toEqual(
      [{
        id: 'Suzuka 9/1/2018 - 9/8/2018',
        'name': 'Suzuka',
        'image_address': 'empty_profile_pic.png',
        'date': '9/1/2018 - 9/8/2018',
        'action': '>',
        'progress': 'Progress 2/6: Action Needed! Discuss',
        'own_identity': 'tourist'
      }]
    );

    expect(tripReducer([],
      {
        type: types.LOAD_TRIP_SUCCESS,
        trips: [{
          id: 'Suzuka 9/1/2018 - 9/8/2018',
          'name': 'Suzuka',
          'image_address': 'empty_profile_pic.png',
          'date': '9/1/2018 - 9/8/2018',
          'action': '>',
          'progress': 'Progress 2/6: Action Needed! Discuss',
          'own_identity': 'tourist'
        },
        {
          id: 'Kato 10/3/2018 - 10/7/2018',
          'name': 'Kato',
          'image_address': 'empty_profile_pic.png',
          'date': '10/3/2018 - 10/7/2018',
          'action': '>',
          'progress': 'Progress 1/6: Action Needed! Accept/Reject',
          'own_identity': 'tour guide'
        },
        {
          id: 'Shantao 4/9/2018 - 4/20/2018',
          'name': 'Shantao',
          'image_address': 'empty_profile_pic.png',
          'date': '4/9/2018 - 4/20/2018',
          'action': '<',
          'progress': 'Progress 3/6: Waiting for Resceduling',
          'own_identity': 'tourist'
        }]
      })
    ).toEqual(
      [{
        id: 'Suzuka 9/1/2018 - 9/8/2018',
        'name': 'Suzuka',
        'image_address': 'empty_profile_pic.png',
        'date': '9/1/2018 - 9/8/2018',
        'action': '>',
        'progress': 'Progress 2/6: Action Needed! Discuss',
        'own_identity': 'tourist'
      },
      {
        id: 'Kato 10/3/2018 - 10/7/2018',
        'name': 'Kato',
        'image_address': 'empty_profile_pic.png',
        'date': '10/3/2018 - 10/7/2018',
        'action': '>',
        'progress': 'Progress 1/6: Action Needed! Accept/Reject',
        'own_identity': 'tour guide'
      },
      {
        id: 'Shantao 4/9/2018 - 4/20/2018',
        'name': 'Shantao',
        'image_address': 'empty_profile_pic.png',
        'date': '4/9/2018 - 4/20/2018',
        'action': '<',
        'progress': 'Progress 3/6: Waiting for Resceduling',
        'own_identity': 'tourist'
      }]
    );

  }); 

}); 
