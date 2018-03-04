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
				}, 
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
				}, 
			] 
		}; 
	}

  render() {
    return (
        <div>
					<div class="schedule-left">
    				<div class="schedule-title"><span class="other-name">Shantao</span>'s</div>
    				<div class="schedule-line"></div>
    				<table class ="schedule-table">
							<itemList items={this.state.todoLeft}></itemList>
    				</table>
    				</div>

    			<div class="schedule-right">
        		<div class="schedule-title">Yours</div>
        		<div class="schedule-line"></div>
        		<table class ="schedule-table">
							<itemList items={this.state.todoRight}></itemList>
       		 </table>
    			</div>
        </div>
    );
  }
}

const item = (props) => {
	return (
		<div>
		<tr>
			<td><div class=`'circle-' + {props.color} + ' schedule-dot'`</div></td>
			<td><div class="date-title">{props.title}</div></td>
		</tr>
		<tr>
			<td></td><td><div class="schedule-description">{props.content}</div></td>
		</tr>
		</div>
	); 
}

const itemList = (props) => {
	return (
		<tbody>
			{props.items.map(item => <item {...item} />)}
		</tbody>
	); 
}

export default Progress;
