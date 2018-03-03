import React from 'react';

class Progress extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			todoRight: [
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
				}
			], 
			todoLeft: [
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
				}
			] 
		}; 
	}

	loadLeft() {
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

loadRight() {
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

  render() {
    return (
        <div>
					<div class="schedule-left">
    				<div class="schedule-title"><span class="other-name">Shantao</span>'s</div>
    				<div class="schedule-line"></div>
    				<table class ="schedule-table">
            	<tbody>
            	</tbody>
    				</table>
    				</div>

    			<div class="schedule-right">
        		<div class="schedule-title">Yours</div>
        		<div class="schedule-line"></div>
        		<table class ="schedule-table">
							<tbody>
							</tbody>
       		 </table>
    			</div>
        </div>
    );
  }
}

export default Progress;
