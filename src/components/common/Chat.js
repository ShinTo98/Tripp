import React from 'react';
import '../styles/schedule.css';
import '../styles/general.css';

class Chat extends React.Component {

	constructor(props) {
		super(props); 
		this.state = {
			chatContent: [
				{
					content: 'I want to go to...',  
					side: 'user-msg'
				}, 
				{
					content: 'Sure! ', 
					side: 'other-msg'
				}, 
				{
					content: 'And to...', 
					side: 'user-msg'
				}, 
				{
					content: 'Nope! ', 
					side: 'other-msg'
				}, 
				{
					content: '*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ', 
					side: 'user-msg'
				}, 
			]
		}; 
	}
	chatSubmit = () => {
		var chatInput = document.getElementsByClassName('chat-input')[0]; 
		if (chatInput.value == '') {
			return false; 
		}
		var content = chatInput.value; 
		this.setState((prevState) => {
			prevState.chatContent.push({
				content: content, 
				side: 'user-msg'
			}); 
			return prevState; 
		}); 
		return false; 
	}

  render() {
    return (
		<div class="chat">
		<textList chatTexts={this.state.chatContent}></textList>
        <form style="height: 100%" id="chat-form" onsubmit={this.chatSubmit}>
            <input type="text" class="chat-input" placeholder="Type here..." onfocus="this.placeholder = ''" onblur="this.placeholder = 'Type here...'">
            <input type="submit" style="visibility: hidden;" />
        </form>
    </div>
</div>
    );
  }
}

const chatText = (props) => {
	return (
		<div class={props.side}>{props.content}</div>
	); 
}

export default Chat;

const textList = (props) => {
	return (
		<div class="chat-text">
			{props.chatTexts.map(text => <chatText {...text} />)}
		</div>
	); 
}
