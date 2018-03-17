import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const chat = {chatContent: [
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
  ]}; 

class ChatApi {
  static getAllChat() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, chat));
      }, delay);
    });
  }

  static addChat(entry) {
    entry = Object.assign({}, entry); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
				chat.chatContent = [
				...chat.chatContent, 
				entry
				]; 

        resolve(entry);
      }, delay);
    });
  }
}

export default ChatApi;
