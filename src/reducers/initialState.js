export default {
  ajaxCallsInProgress: 0, 
  /*
  chat: {chatContent: [
    {
      content: 'I want to go to...',  
      side: 'user-msg', 
      count: 0
    }, 
    {
      content: 'Sure! ', 
      side: 'other-msg', 
      count: 1
    }, 
    {
      content: 'And to...', 
      side: 'user-msg', 
      count: 2
    }, 
    {
      content: 'Nope! ', 
      side: 'other-msg', 
      count: 3
    }, 
    {
      content: '*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ', 
      side: 'user-msg', 
      count: 4
    } 
  ]}, 
  progress: {
    todoRight: [
      {
        title: 'todo1', 
        content: '[content]', 
        color: 'green', 
        count: 0
      }, 
      {
        title: 'todo2', 
        content: '[content]', 
        color: 'green', 
        count: 1

      }, 
      {
        title: 'todo3', 
        content: '[content]', 
        color: 'red', 
        count: 2

      }, 
      {
        title: 'todo4', 
        content: '[content]', 
        color: 'red', 
        count: 3

      }
    ], 
    todoLeft: [
      {
        title: 'todo1', 
        content: '[content]', 
        color: 'green', 
        count: 0

      }, 
      {
        title: 'todo2', 
        content: '[content]', 
        color: 'green', 
        count: 1

      }, 
      {
        title: 'todo3', 
        content: '[content]', 
        color: 'red', 
        count: 2

      }, 
      {
        title: 'todo4', 
        content: '[content]', 
        color: 'red', 
        count: 3

      }
    ]}, 
    */
  schedule: {
    scheduleMisc: {
      start: '4/9/2018',
      end: '4/20/2018',
      day: 12
    },
          
    scheduleItems: [
      {
        title: 'day 1',
        content: '[description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description]', 
        count: 0
      },
      {
        title: 'day 2',
        content: '[description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description]', 
        count: 1
      }
    ]
  },

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
