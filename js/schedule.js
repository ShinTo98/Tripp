var count = 0; 

function addShowPanel() {
	var panel = document.getElementsByClassName('add-task-panel')[0]; 
	panel.style.display = 'block'; 
}

function addSubmit() {
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  
	var table = document.querySelector('.schedule-table tbody');  

	if (content.value == '' || title.value == '') {
		alert('fill in both title and content'); 
		return false; 
	}

/*
	// create new title 
	var newTitle = document.createElement('tr'); 
	newTitle.innerHTML += '<td><div class="circle schedule-dot"></div></td>'; 
	newTitle.className = 'entry' + count; 
	var newTD = document.createElement('td'); 
	var newDiv = document.createElement('div'); 
	newDiv.className = 'date-title'; 
	newDiv.innerHTML = title.value; 
	newDiv.id = 'title' + count; 
	newTD.appendChild(newDiv); 
	newTitle.appendChild(newTD); 
	table.appendChild(newTitle); 

	// create new content 
	var newContent = document.createElement('tr'); 
	newContent.className = 'entry' + count; 
	newContent.innerHTML += '<td></td>'; 
	newTD = document.createElement('td'); 
	newDiv = document.createElement('div'); 
	newDiv.className = 'schedule-description'; 
	newDiv.innerHTML = content.value; 
	newDiv.id = 'content' + count; 
	var newTD2 = document.createElement('td'); 
	newTD2.innerHTML = '<input class="pic-text submit-button button-color"' +  
	'type="submit" style="margin: 0" id="button' + count + '" value="Edit"' + 
	'onclick="editShowPanel(this)"/>'
	newTD.appendChild(newDiv); 
	newContent.appendChild(newTD); 
	newContent.appendChild(newTD2); 
	table.appendChild(newContent); 
	*/
	addEntry(title.value, content.value); 


	document.getElementsByClassName('add-task-panel')[0].style.display = 'none'; 
	content.value = ''; // clear input
	title.value = ''; // clear input

	count++; 

  return false; 
}

function addEntry(titleText, contentText) {
	var table = document.querySelector('.schedule-table tbody');  

	// create new title 
	var newTitle = document.createElement('tr'); 
	newTitle.innerHTML += '<td><div class="circle schedule-dot"></div></td>'; 
	newTitle.className = 'entry' + count; 
	var newTD = document.createElement('td'); 
	var newDiv = document.createElement('div'); 
	newDiv.className = 'date-title'; 
	newDiv.innerHTML = titleText; 
	newDiv.id = 'title' + count; 
	newTD.appendChild(newDiv); 
	newTitle.appendChild(newTD); 
	table.appendChild(newTitle); 

	// create new content 
	var newContent = document.createElement('tr'); 
	newContent.className = 'entry' + count; 
	newContent.innerHTML += '<td></td>'; 
	newTD = document.createElement('td'); 
	newDiv = document.createElement('div'); 
	newDiv.className = 'schedule-description'; 
	newDiv.innerHTML = contentText; 
	newDiv.id = 'content' + count; 
	var newTD2 = document.createElement('td'); 
	newTD2.innerHTML = '<input class="pic-text submit-button button-color"' +  
	'type="submit" style="margin: 0" id="button' + count + '" value="Edit"' + 
	'onclick="editShowPanel(this)"/>'
	newTD.appendChild(newDiv); 
	newContent.appendChild(newTD); 
	newContent.appendChild(newTD2); 
	table.appendChild(newContent);
}

function editShowPanel(button) {
	var panel = document.getElementsByClassName('add-task-panel')[0]; 
	panel.style.display = 'block'; 
	var editButton = document.querySelector('.add-button'); 
	var deleteButton = document.querySelector('.cancel-button'); 
	var id = button.id[button.id.length - 1]; 
	console.log(id); 
	editButton.onclick = function() {editItem(id)}; 
	editButton.value = 'edit'; 
	deleteButton.onclick = function() {deleteItem(id)}; 
	deleteButton.value = 'delete'; 
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  
	var titleVal = document.querySelector('#title' + id); 
	var contentVal = document.querySelector('#content' + id); 
	title.value = titleVal.innerHTML; 
	content.value = contentVal.innerHTML; 
}

function addHidePanel() {
	var panel = document.getElementsByClassName('add-task-panel')[0]; 
	panel.style.display = 'none'; 
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  
	content.value = ''; // clear input
	title.value = ''; // clear input
}

function editItem(id) {
	var editButton = document.querySelector('.add-button'); 
	var deleteButton = document.querySelector('.cancel-button'); 
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  
	var titleVal = document.querySelector('#title' + id); 
	var contentVal = document.querySelector('#content' + id); 
	titleVal.innerHTML = title.value; 
	contentVal.innerHTML = content.value; 

	editButton.onclick = addSubmit; 
	editButton.value = 'Add'; 
	deleteButton.onclick = addHidePanel; 
	deleteButton.value = 'Cancel'; 
	content.value = ''; 
	title.value = ''; 
	document.getElementsByClassName('add-task-panel')[0].style.display = 'none'; 
}

function deleteItem(id) {
	var editButton = document.querySelector('.add-button'); 
	var deleteButton = document.querySelector('.cancel-button'); 
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  
	

	document.getElementsByClassName('entry' + id)[0].innerHTML = '';  
	document.getElementsByClassName('entry' + id)[1].innerHTML = '';  

	editButton.onclick = addSubmit; 
	editButton.value = 'Add'; 
	deleteButton.onclick = addHidePanel; 
	deleteButton.value = 'Cancel'; 
	content.value = ''; 
	title.value = ''; 
	document.getElementsByClassName('add-task-panel')[0].style.display = 'none'; 
}

function loadScheduleTitle() {

}

function loadSchedule() {

}

let scheduleTitle = [
	{
		'start': '4/9/2018', 
		'end': '4/20/2018/', 
		'day': 12
	}
]; 

let schedule = [
	{
		'title': 'day 1', 
		'content': '[description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description]'
	}, 
	{
		'title': 'day 2', 
		'content': '[description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description]'
	}, 
]; 


window.onload = function() {
	loadScheduleTitle(); 
	loadSchedule(); 
}
