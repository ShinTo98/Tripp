import guideReducer from './guideReducer'; 
import * as types from './../actions/actionTypes'; 
import expect from 'expect'; 

describe('guideReducer', () => {
  it('should return the initial state', () => {
    expect(guideReducer(undefined, {})).toEqual([]);
    
    expect(guideReducer([],
      {
        type: types.LOAD_GUIDE_SUCCESS,
        guides: [{
          id: 'Cheng',
          'name': 'Cheng',
          'image_address': 'cheng_hangzhou.jpg',
          'locations': [
              'Hangzhou',
              'San Diego'
          ],
          'description': 'Look! I can also be a tour guide here in Hangzhou. It is a truly beautiful city. I am also pretty good at casino.'
        }]
      })
    ).toEqual(
      [{
        id: 'Cheng',
        'name': 'Cheng',
        'image_address': 'cheng_hangzhou.jpg',
        'locations': [
            'Hangzhou',
            'San Diego'
        ],
        'description': 'Look! I can also be a tour guide here in Hangzhou. It is a truly beautiful city. I am also pretty good at casino.'
      }]
    );

    expect(guideReducer([],
      {
        type: types.LOAD_GUIDE_SUCCESS,
        guides: [{
          id: 'Cheng',
          'name': 'Cheng',
          'image_address': 'cheng_hangzhou.jpg',
          'locations': [
              'Hangzhou',
              'San Diego'
          ],
          'description': 'Look! I can also be a tour guide here in Hangzhou. It is a truly beautiful city. I am also pretty good at casino.'
        },
        {
          id: 'Shantao',
          'name': 'Shantao',
          'image_address': 'shantao_casino.png',
          'locations': [
              'Wuhan',
              'San Diego'
          ],
          'description': 'I am great at casino!'
        },
        {
          id: 'Chao',
          'name': 'Chao',
          'image_address': 'chao_great.jpeg',
          'locations': [
              'Hangzhou',
              'San Diego'
          ],
          'description': 'I am cool and I will be a great tour guide for you!'
        }]
      })
    ).toEqual(
      [{
        id: 'Cheng',
        'name': 'Cheng',
        'image_address': 'cheng_hangzhou.jpg',
        'locations': [
            'Hangzhou',
            'San Diego'
        ],
        'description': 'Look! I can also be a tour guide here in Hangzhou. It is a truly beautiful city. I am also pretty good at casino.'
      },
      {
        id: 'Shantao',
        'name': 'Shantao',
        'image_address': 'shantao_casino.png',
        'locations': [
            'Wuhan',
            'San Diego'
        ],
        'description': 'I am great at casino!'
      },
      {
        id: 'Chao',
        'name': 'Chao',
        'image_address': 'chao_great.jpeg',
        'locations': [
            'Hangzhou',
            'San Diego'
        ],
        'description': 'I am cool and I will be a great tour guide for you!'
      }]
    );

  }); 

}); 
