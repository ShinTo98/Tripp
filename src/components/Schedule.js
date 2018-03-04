import React from 'react';
import '../styles/schedule.css';
import '../styles/general.css';

class Schedule extends React.Component {

	constructor(props) {
		super(props); 
		this.state = {
			scheduleTitle: {
					start: '4/9/2018', 
					end: '4/20/2018', 
					day: 12
				}, 
		scheduleItems:  [
			{
				title: 'day 1', 
				content: '[description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description]'
				count: 0
			}, 
			{
				title: 'day 2', 
				content: '[description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description][description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description] [description]'
				count: 1
			}, 
		], 
		button1: 'Add', 
		button2: 'Cancel', 
		buttonDisplay: 'none'
			
		}; 
	}
	
	/*
/*
 * showing panel for add button
 */
	addShowPanel = () => {
		this.setState((prevState) => ({
			buttonDisplay: 'block' 
		})); 	
	}

/*
 * submit form for add button
 */
addSubmit = () => {
	var content = document.getElementsByClassName('add-input-content')[0];  
	var title = document.getElementsByClassName('add-input-title')[0];  

	if (content.value == '' || title.value == '') {
		alert('fill in both title and content'); 
		return false; 
	}
	this.setState((prevState) => ({
			scheduleItems: 
				[...prevState.scheduleItems, {
					title: title.value, 
					content: content.value, 
					side: 'user-msg', 
					count: prevState.scheduleItems.length
				}], 
			buttonDisplay: 'none'
	})); 

	content.value = ''; // clear input
	title.value = ''; // clear input

  return false; // prevent default
}



/*
 * show panel for edit button, change buttons functions and render title/content
 */
editShowPanel = (button) => {
	// show panel
	this.setState((prevState) => ({
		buttonDisplay: 'block',  
		button1: 'Edit', 
		button2: 'Delete'
	})); 	
	
	var id = button.id.substr(6); 


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
addHidePanel = () => {
	this.setState((prevState) => ({
		buttonDisplay: 'none' 
	})); 	
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

  render() {
    return (
        <div>
					<div class="add-task-panel" style=`'display:' + {this.state.buttonDisplay}`>
					<form style="height: 100%" id="add-form" onsubmit="return false; ">
							<input type="text" class="add-input-title" placeholder="Title..." onfocus="this.placeholder = ''" onblur="this.placeholder = 'Title...'">
							<textarea type="text" class="add-input-content" placeholder="Content..." onfocus="this.placeholder = ''" onblur="this.placeholder = 'Content...'"></textarea>
							<input class="pic-text submit-button button-color add-button" type="submit"
									 value="Add" onclick="addSubmit()" />
							<input class="pic-text submit-button button-color cancel-button" type="submit"
									 value="Cancel" onclick="addHidePanel()" />
					</form>
					</div>
					<div class="schedule">
					<div class="schedule-title">
							<scheduleTitle start={this.state.scheduleTitle.start}
							end={this.state.scheduleTitle.end}
							day={this.state.scheduleTitle.day}></scheduleTitle>
							<span>
									<input class="pic-text submit-button button-color" type="submit"
									style="margin: 0" value="Add" onclick="addShowPanel()"/>
							</span>
					</div>
			
					<div class="schedule-line"></div>
					<table class ="schedule-table">
						<entryList entries={this.state.scheduleItems}></entryList>
					</table>
					</div>
        </div>
    );
  }
}; 

const entryList = (props) => {
	return (
		<tbody>
			{props.entries.map(entry => <addEntry {...entry} />)}
		</tbody>
	
	); 
}; 

/*
 * add entry to page with given title and content
 */
const addEntry = (props) => {
	return (
	<div>
	<tr class=`'entry' + {props.count}`>
		<td><div class="circle schedule-dot"></div></td>
		<td><div class="date-title" id=`'title' + {props.count}`>{props.title}</div></td>
	</tr>
	<tr class=`'entry' + {props.count}`>
		<td><div class="schedule-description" id=`'content' + {props.count}`>{props.content}</div></td>
		<td><input class="pic-text submit-button button-color" type="submit" style="margin: 0" id=`'button' + {props.count}` value="Edit" onclick="editShowPanel(this)"/></td>
	</tr>
	</div>
	); 
}; 

const scheduleTitle = (props) => {
	return (
		<span id="title">`'Date: ' + props.start + ' - ' + props.end + ', ' + props.day + ' days'`</span>

	); 
}

export default Schedule;
