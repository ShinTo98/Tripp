import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const progress = {
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
    ]}; 

class ProgressApi {
  static getAllProgress() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, progress));
      }, delay);
    });
  }

}

export default ProgressApi;
