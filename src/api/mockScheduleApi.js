import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const schedule = {
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
}; 

class ScheduleApi {
  static getAllSchedule() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(JSON.parse(JSON.stringify(schedule)));
      }, delay);
    });
  }

  static addSchedule(entry) {
    entry = Object.assign({}, entry); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
				schedule.scheduleItems = [
				...schedule.scheduleItems, 
				entry
				]; 

        resolve(entry);
      }, delay);
    });
  }

  static editSchedule(entry) {
    entry = Object.assign({}, entry); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
				schedule.scheduleItems[entry.count] = entry; 
        resolve(entry);
      }, delay);
    });
  }

  static deleteSchedule(entry) {
    entry = Object.assign({}, entry); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
				schedule.scheduleItems = schedule.scheduleItems.filter(item => item.count !== entry.count); 
				for (let i = 0; i < schedule.scheduleItems.length; i++) {
					schedule.scheduleItems[i].count = i; 
				}
        resolve(entry);
      }, delay);
    });
  }
}

export default ScheduleApi;
