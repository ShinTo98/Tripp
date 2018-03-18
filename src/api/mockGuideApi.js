import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const guides = [
  {
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
  },
  {
    id: 'Sherlock',
    'name': 'Sherlock',
    'image_address': 'sherlock.jpg',
    'locations': [
        'Baker Street'
    ],
    'description': 'Anderson, don\'t talk out loud. You lower the IQ of the whole street.'
  },
  {
    id: 'John',
    'name': 'John',
    'image_address': 'john.jpeg',
    'locations': [
        'Baker Street'
    ],
    'description': 'Alright, alright. Girls. Calm down.'
  },
  {
    id: 'Moriaty',
    'name': 'Moriarty',
    'image_address': 'moriarty.jpg',
    'locations': [
        'Baker Street'
    ],
    'description': 'That\'s what people do!'
  },
  {
    id: 'Eurus',
    'name': 'Eurus',
    'image_address': 'eurus.jpg',
    'locations': [
        'Baker Street'
    ],
    'description': 'I\'m Eurus. Silly name, isn\'t it? Greek. Means “the east wind”. My parents loved silly names, like Eurus… or Mycroft… or Sherlock. Oh, look at him. Didn\'t it ever occur to you, not even once, that Sherlock\'s secret brother might just be Sherlock\'s secret sister? Huh? He\'s making a funny face. I think I\'ll put a hole in it.'
  }
];

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (guide) => {
  return guide.name; // TODO
};

class GuideApi {
  static getAllGuides() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], guides));
      }, delay);
    });
  }


  static saveGuide(guide) {
    guide = Object.assign({}, guide); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        // Simulate server-side validation
        const minDescriptionLength = 1;
        if (guide.description.length < minDescriptionLength) {
          reject(`Description must be at least ${minDescriptionLength} characters.`);
        }
        const minLocationNum = 1;
        if (guide.locations.length < minDescriptionLength) {
          reject(`You must have at least ${minLocationNum} locations.`);
        }

        if (guide.id) {
          const existingGuideIndex = guides.findIndex(a => a.id == guide.id);
          guides.splice(existingGuideIndex, 1, guide);
        } else {

          //Just simulating creation here.
          //The server would generate ids for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          guide.id = generateId(guide);
          guides.push(guide);
        }

        resolve(guide);
      }, delay);
    });
  }
}

export default GuideApi;
