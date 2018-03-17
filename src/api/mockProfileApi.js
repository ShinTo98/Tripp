import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const profiles = [
  {
    id: "shantao.yi@gmail.com",
    firstName: "Shantao",
    lastName: "Yi",
    email: "shantao.yi@gmail.com",
    password: "123456",
    isGuide: true,
    places: "Wuhan, San Diego",
    themes: "Car Cult",
    description: "I love cars!!!",
    fromDate: "2018-3-16",
    toDate: "2018-3-22",
    fromTime: "09:00",
    toTime: "19:00",
    perPlan: "200",
    perHour: "50"
  },
  {
    id: "cgong@gmail.com",
    firstName: "Cheng",
    lastName: "Gong",
    email: "cgong@gmail.com",
    password: "qwerty",
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
  {
    id: "czhou@gmail.com",
    firstName: "Chao",
    lastName: "Zhou",
    email: "czhou@gmail.com",
    password: "987654",
    isGuide: true,
    places: "Hangzhou, San Diego",
    themes: "History",
    description: "I love history!!!",
    fromDate: "2018-3-27",
    toDate: "2018-4-10",
    fromTime: "11:00",
    toTime: "23:00",
    perPlan: "250",
    perHour: "100"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (profile) => {
  return replaceAll(profile.email, ' ', '-');
};



class ProfileApi {
  // Get all profiles
  static getAllProfiles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], profiles));
      }, delay);
    });
  }

  // Get a certain profile by its id
  static getProfilebyId(profileId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Find the profile by id
        const profileNeeded = profile => {
            return profile.id = profileId;
        };

        // Return the profile needed
        resolve(Object.assign({}, profileNeeded));
      }, delay);
    });
  }

  static saveProfile(profile) {
    console.log("api");
    profile = Object.assign({}, profile); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        /*
        const minDescriptionLength = 1;
        if (profile.description.length < minDescriptionLength) {
          reject(`Title must be at least ${minDescriptionLength} characters.`);
        }

        if (profile.id) {
          const existingCourseIndex = profiles.findIndex(a => a.id == profile.id);
          profiles.splice(existingCourseIndex, 1, profile);
        } else {
          */
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          profile.id = generateId(profile);
          profiles.push(profile);
        //}

        resolve(profile);
      }, delay);
    });
  }

  // Delete a certain profile by id
  static deleteProfile(profileId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProfileToDelete = profiles.findIndex(profile => {
          return profile.id == profileId;
        });
        profiles.splice(indexOfProfileToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProfileApi;