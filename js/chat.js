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

function showPanel() {
	var panel = document.getElementsByClassName('add-task-panel')[0]; 
	panel.style.display = 'block'; 
}

function addSubmit() {
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  
	var table = document.getElementsByClassName('schedule-table')[0];  

	if (content.value == '' || title.value == '') {
		alert('fill in both title and content'); 
		return false; 
	}
	// create new title 
	var newTitle = document.createElement('tr'); 
	newTitle.innerHTML += '<td><div class="circle schedule-dot"></div></td>'; 
	var newTD = document.createElement('td'); 
	var newDiv = document.createElement('div'); 
	newDiv.className = 'date-title'; 
	newDiv.innerHTML = title.value; 
	newTD.appendChild(newDiv); 
	newTitle.appendChild(newTD); 
	table.appendChild(newTitle); 

	// create new content 
	var newContent = document.createElement('tr'); 
	newContent.innerHTML += '<td></td>'; 
	newTD = document.createElement('td'); 
	newDiv = document.createElement('div'); 
	newDiv.className = 'schedule-description'; 
	newDiv.innerHTML = content.value; 
	newTD.appendChild(newDiv); 
	newContent.appendChild(newTD); 
	table.appendChild(newContent); 

	document.getElementsByClassName('add-task-panel')[0].style.display = 'none'; 
	content.value = ''; // clear input
	title.value = ''; // clear input

  return false; 
}
