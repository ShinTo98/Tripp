import React, {PropTypes} from 'react';

const ChatText = (props) => {
	return (
		<div className={props.side}>{props.content}</div>
	); 
};

ChatText.propTypes = {
  side: PropTypes.string.isRequired, 
  content: PropTypes.string.isRequired 
};

export default ChatText;
