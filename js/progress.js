function loadLeft() {
	var table = document.querySelector('.schedule-left .schedule-table tbody'); 
	console.log(table); 
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
	console.log(table); 
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
