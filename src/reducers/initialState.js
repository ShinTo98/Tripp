export default {
  ajaxCallsInProgress: 0, 
	chat: {chatContent: []}, 
	progress: {todoRight: [], todoLeft: []}, 
	schedule: {scheduleMisc: {start: '', end: '', day: ''}, scheduleItems: []}, 

  profile: {
    id: "init@gmail.com",
    firstName: "Example",
    lastName: "Example",
    email: "init@gmail.com",
    password: "1234",
    isGuide: false,
    places: "",
    themes: "",
    description: "",
    fromDate: "",
    toDate: "",
    fromTime: "",
    toTime: "",
    perPlan: "",
    perHour: ""
  },

  // BUGG TODO
  guides: [{
    'name': 'Cheng',
    'image_address': 'cheng_hangzhou.jpg',
    'locations': [
        'Hangzhou',
        'San Diego'
    ],
    'description': 'Look! I can also be a tour guide here in Hangzhou. It is a truly beautiful city. I am also pretty good at casino.'
  },
  {
    'name': 'Shantao',
    'image_address': 'shantao_casino.png',
    'locations': [
        'Wuhan',
        'San Diego'
    ],
    'description': 'I am great at casino!'
  }]
};
