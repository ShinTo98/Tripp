import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import * as chatActions from '../../actions/chatActions';
import '../../styles/schedule.css';
import ChatText from "../ChatText";

class Chat extends React.Component {

	constructor(props) {
		super(props); 
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
		let entry = {
          content: content, 
          side: 'user-msg', 
          count: this.props.chatContent.length
        }; 
    this.props.actions.addChat(entry); 
		chatInput.value = ''; 
		chatText.scrollTop = chatText.scrollHeight; // scroll down
	}

  render() {
    return (
		<div className="chat">
			<div className="chat-text">
				{this.props.chatContent.map(text => <ChatText {...text} key={text.count}/>)}
			</div>
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


Chat.propTypes = {
  chatContent: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired	
};

function mapStateToProps(state, ownProps) {
  //console.log(state); 
  return {
    chatContent: state.chat.chatContent
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chatActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
