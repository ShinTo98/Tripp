import React from 'react';
import '../../styles/schedule.css';
import ChatText from "../ChatText";

class Chat extends React.Component {

	constructor(props) {
		super(props); 
		this.state = {
			chatContent: [
				{
					content: 'I want to go to...',  
					side: 'user-msg', 
					count: 0
				}, 
				{
					content: 'Sure! ', 
					side: 'other-msg', 
					count: 1
				}, 
				{
					content: 'And to...', 
					side: 'user-msg', 
					count: 2
				}, 
				{
					content: 'Nope! ', 
					side: 'other-msg', 
					count: 3
				}, 
				{
					content: '*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ', 
					side: 'user-msg', 
					count: 4
				} 
			]
		};
		this.chatSubmit = this.chatSubmit.bind(this);
		
	}
	chatSubmit(e) {
		e.preventDefault(); 
		let chatInput = document.getElementsByClassName('chat-input')[0]; 
		let chatText = document.getElementsByClassName('chat-text')[0];  		
		if (chatInput.value == '') {
			return; 
		}
		let content = chatInput.value; 
		this.setState((prevState) => ({
				chatContent: 
					[...prevState.chatContent, {
						content: content, 
						side: 'user-msg', 
						count: prevState.chatContent.length
			}] 
		})); 
		chatInput.value = ''; 
		chatText.scrollTop = chatText.scrollHeight; // scroll down
	}

  render() {
    return (
		<div className="chat">
			<div className="chat-text">
				{this.state.chatContent.map(text => <ChatText {...text} key={text.count}/>)}
			</div>
			<textList chatTexts={this.state.chatContent}></textList>
			<form style={{height: '100%'}} id="chat-form" onSubmit={this.chatSubmit}>
				<input type="text" className="chat-input" placeholder="Type here..."
				onFocus={function(e) {e.target.placeholder = ''; }} onBlur={function(e)
				{e.target.placeholder = 'Type here...'; }} />
				<input type="submit" style={{visibility: 'hidden'}} />
			</form>
		</div>
    );
  }
}

export default Chat;
