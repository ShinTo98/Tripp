function loadLeft() {
	var table = document.querySelector('.schedule-left .schedule-table tbody'); 
	todoLeft.forEach((item) => {
		var title = item['title']; 
		var content = item['content']; 
		var color = item['color']; 
		table.innerHTML += '<tr><td><div class="circle-' + color + ' schedule-dot"'
		+ '</div></td><td><div class="date-title">' + title + '</div></td>' + 
		'<tr><td></td><td><div class="schedule-description">' + content + 
		'</div></td></tr>'; 
	}); 
}

function loadRight() {
	var table = document.querySelector('.schedule-right .schedule-table tbody'); 
	todoRight.forEach((item) => {
		var title = item['title']; 
		var content = item['content']; 
		var color = item['color']; 
		table.innerHTML += '<tr><td><div class="circle-' + color + ' schedule-dot"'
		+ '</div></td><td><div class="date-title">' + title + '</div></td>' + 
		'<tr><td></td><td><div class="schedule-description">' + content + 
		'</div></td></tr>'; 
	}); 

}

function loadHeader() {
	let urlParams = new URLSearchParams(window.location.search); 
	let as = urlParams.get('as'); 
	let other = urlParams.get('other'); 
	var otherName = document.getElementsByClassName('other-name'); 
	var myName = document.querySelector('.my-name'); 
	if (as != null) {
		myName.innerHTML = as; 
	} else {
		myName.innerHTML = header[0]['my-name']; 
	}
	if (other != null) {
		otherName[0].innerHTML = other; 
		otherName[1].innerHTML = other; 
	} else {
		otherName[0].innerHTML = header[0]['other-name']; 
		otherName[1].innerHTML = header[0]['other-name']; 
	}
}


let todoLeft = [
	{
		'title': 'todo1', 
		'content': '[content]', 
		'color': 'green'
	}, 
	{
		'title': 'todo2', 
		'content': '[content]', 
		'color': 'green'
	}, 
	{
		'title': 'todo3', 
		'content': '[content]', 
		'color': 'red'
	}, 
	{
		'title': 'todo4', 
		'content': '[content]', 
		'color': 'red'
	}, 
]; 

let todoRight = [
	{
		'title': 'todo1', 
		'content': '[content]', 
		'color': 'green'
	}, 
	{
		'title': 'todo2', 
		'content': '[content]', 
		'color': 'green'
	}, 
	{
		'title': 'todo3', 
		'content': '[content]', 
		'color': 'red'
	}, 
	{
		'title': 'todo4', 
		'content': '[content]', 
		'color': 'red'
	}, 
]; 

let header = [
	{
		'other-name': 'Shantao', 
		'my-name': 'Tourist'
	},
];
