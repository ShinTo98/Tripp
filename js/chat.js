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
	var content = chatInput.value; 
	addText(content, 'user-msg'); 
	chatInput.value = ''; // clear input
  return false; 
}

function addText(content, side) {
	var chatText = document.getElementsByClassName('chat-text')[0];  
	var newText = document.createElement('div'); 
	newText.className = side; 
	newText.innerHTML = content; // get input
	chatText.append(newText); 

	chatText.scrollTop = chatText.scrollHeight; // scroll down
}

function loadChatContent() {
	chatContent.forEach((item) => {
		var content = item['content']; 
		var side = item['side']; 
		addText(content, side); 
	}); 
}

let chatContent = [
	{
		'content': 'I want to go to...',  
		'side': 'user-msg'
	}, 
	{
		'content': 'Sure! ', 
		'side': 'other-msg'
	}, 
	{
		'content': 'And to...', 
		'side': 'user-msg'
	}, 
	{
		'content': 'Nope! ', 
		'side': 'other-msg'
	}, 
	{
		'content': '*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ', 
		'side': 'user-msg'
	}, 
]; 


