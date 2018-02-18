'use strict';
function chatSubmit() {
	var chatInput = document.getElementsByClassName('chat-input')[0];  
	var chatText = document.getElementsByClassName('chat-text')[0];  

	//console.log(chatInput.value); 
	//return false; 

	if (chatInput.value == '') {
		return false; 
	}
	// create new text
	var newText = document.createElement('div'); 
	newText.className = 'user-msg'; 
	newText.innerHTML = chatInput.value; // get input
	chatText.append(newText); 

	chatText.scrollTop = chatText.scrollHeight; // scroll down
	chatInput.value = ''; // clear input
  return false; 
}
