var count = 0; 

/*
 * showing panel for add button
 */
function addShowPanel() {
	var panel = document.getElementsByClassName('add-task-panel')[0]; 
	panel.style.display = 'block'; 
}

/*
 * submit form for add button
 */
function addSubmit() {
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  
	var table = document.querySelector('.schedule-table tbody');  

	if (content.value == '' || title.value == '') {
		alert('fill in both title and content'); 
		return false; 
	}

	addEntry(title.value, content.value); // add entry to page with title and content 


	document.getElementsByClassName('add-task-panel')[0].style.display = 'none'; 
	content.value = ''; // clear input
	title.value = ''; // clear input

	count++; // # 0f entries 

  return false; // prevent default
}

/*
 * add entry to page with given title and content
 */
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

/*
 * show panel for edit button, change buttons functions and render title/content
 */
function editShowPanel(button) {
	// show panel
	var panel = document.getElementsByClassName('add-task-panel')[0]; 
	panel.style.display = 'block'; 
	
	var editButton = document.querySelector('.add-button'); 
	var deleteButton = document.querySelector('.cancel-button'); 
	var id = button.id[button.id.length - 1]; 

	// change add button to edit button
	editButton.onclick = function() {editItem(id)}; 
	editButton.value = 'edit'; 

	// change cancel button to delete button
	deleteButton.onclick = function() {deleteItem(id)}; 
	deleteButton.value = 'delete'; 

	// get content and title
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  
	var titleVal = document.querySelector('#title' + id); 
	var contentVal = document.querySelector('#content' + id); 
	title.value = titleVal.innerHTML; 
	content.value = contentVal.innerHTML; 
}

/*
 * hide panel for cancel button
 */
function addHidePanel() {
	var panel = document.getElementsByClassName('add-task-panel')[0]; 
	panel.style.display = 'none'; 
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  
	content.value = ''; // clear input
	title.value = ''; // clear input
}

/*
 * edit entry
 */
function editItem(id) {
	// set content and title
	var editButton = document.querySelector('.add-button'); 
	var deleteButton = document.querySelector('.cancel-button'); 
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  
	var titleVal = document.querySelector('#title' + id); 
	var contentVal = document.querySelector('#content' + id); 
	titleVal.innerHTML = title.value; 
	contentVal.innerHTML = content.value; 

	// change buttons back to default functions
	editButton.onclick = addSubmit; 
	editButton.value = 'Add'; 
	deleteButton.onclick = addHidePanel; 
	deleteButton.value = 'Cancel'; 
	content.value = ''; 
	title.value = ''; 
	document.getElementsByClassName('add-task-panel')[0].style.display = 'none'; 
	// hide
}

/*
 * delete entry
 */
function deleteItem(id) {
	var editButton = document.querySelector('.add-button'); 
	var deleteButton = document.querySelector('.cancel-button'); 
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  
	
	// delete everything
	document.getElementsByClassName('entry' + id)[0].innerHTML = '';  
	document.getElementsByClassName('entry' + id)[1].innerHTML = '';  
	editButton.onclick = addSubmit; 
	editButton.value = 'Add'; 
	deleteButton.onclick = addHidePanel; 
	deleteButton.value = 'Cancel'; 
	content.value = ''; 
	title.value = ''; 

	document.getElementsByClassName('add-task-panel')[0].style.display = 'none'; 
	// hide
}

/*
 * load schedule title from fake database
 */
function loadScheduleTitle() {
	var start = scheduleTitle[0]['start']; 
	var end = scheduleTitle[0]['end']; 
	var day = scheduleTitle[0]['day']; 
	document.querySelector('#title').innerHTML = 'Date: ' + start + ' - ' + end +
		', ' + day + ' days'; 
}

/*
 * laod schedule entries from fake database
 */
function loadSchedule() {
	scheduleItems.forEach((item) => {
		var title = item['title']; 
		var content = item['content']; 
		addEntry(title, content); // add entry
		count++; 
	}); 
}

function loadHeader() {
	let urlParams = new URLSearchParams(window.location.search); 
	let as = urlParams.get('as'); 
	let other = urlParams.get('other'); 
	var otherName = document.querySelector('.other-name'); 
	var myName = document.querySelector('.my-name'); 
	if (as != null) {
		myName.innerHTML = as; 
	} else {
		myName.innerHTML = header[0]['my-name']; 
	}
	if (other != null) {
		otherName.innerHTML = other; 
	} else {
		otherName.innerHTML = header[0]['other-name']; 
	}
}

let scheduleTitle = [
	{
		'start': '4/9/2018', 
		'end': '4/20/2018', 
		'day': 12
	}
]; 

let scheduleItems = [
	{
		'title': 'day 1', 
		'content': '[description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description]'
	}, 
	{
		'title': 'day 2', 
		'content': '[description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description]'
	}, 
]; 

let header = [
	{
		'other-name': 'Shantao', 
		'my-name': 'Tourist'
	},
]; 

