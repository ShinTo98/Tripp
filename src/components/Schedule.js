import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../actions/scheduleActions';
import '../styles/schedule.css';
import Chat from "./common/Chat";


class Schedule extends React.Component {

  constructor(props) {
    super(props); 
		this.state = {
			button1: 'Add', 
    	button2: 'Cancel', 
    	buttonDisplay: 'none', 
    	id: -1 
		}; 

    this.addShowPanel = this.addShowPanel.bind(this);
    this.addHidePanel = this.addHidePanel.bind(this);
    this.addSubmit = this.addSubmit.bind(this);
    this.editShowPanel = this.editShowPanel.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addButtonClicked = this.addButtonClicked.bind(this);
    this.cancelButtonClicked = this.cancelButtonClicked.bind(this);
  }
  
  /*
/*
 * showing panel for add button
 */
  addShowPanel(e) {
    e.preventDefault(); 
    this.setState((prevState) => ({
      buttonDisplay: 'block' 
    }));  
  }

/*
 * submit form for add button
 */
addSubmit() {
  let content = document.getElementsByClassName('add-input-content')[0];  
  let title = document.getElementsByClassName('add-input-title')[0];  

  if (content.value == '' || title.value == '') {
    alert('fill in both title and content'); 
  }
  let tv = title.value; 
  let cv = content.value; 
	let entry = {
          title: tv, 
          content: cv, 
          count: this.props.scheduleItems.length
        }; 
        this.props.actions.addSchedule(entry); 
  this.setState((prevState) => ({
      buttonDisplay: 'none'
  })); 

  content.value = ''; // clear input
  title.value = ''; // clear input

}



/*
 * show panel for edit button, change buttons functions and render title/content
 */
editShowPanel(e) {
  e.preventDefault(); 
  // show panel
  let button = e.currentTarget; 
  let id = button.id.substr(6); 
  this.setState((prevState) => ({
    buttonDisplay: 'block',  
    button1: 'Edit', 
    button2: 'Delete', 
    id: parseInt(id)
  }));  

  // get content and title
  let content = document.getElementsByClassName('add-input-content')[0];  
  let title = document.getElementsByClassName('add-input-title')[0];  
  let titleVal = document.querySelector('#title' + id); 
  let contentVal = document.querySelector('#content' + id); 
  title.value = titleVal.innerHTML; 
  content.value = contentVal.innerHTML; 
}

  /*
   * hide panel for cancel button
   */
  addHidePanel() {
    this.setState((prevState) => ({
      buttonDisplay: 'none' 
    }));  
    let content = document.getElementsByClassName('add-input-content')[0];  
    let title = document.getElementsByClassName('add-input-title')[0];  
    content.value = ''; // clear input
    title.value = ''; // clear input
  }

  /*
   * edit entry
   */
  editItem() {
    let content = document.getElementsByClassName('add-input-content')[0];  
    let title = document.getElementsByClassName('add-input-title')[0];  
    let id = this.state.id; 
    let tv = title.value; 
    let cv = content.value; 
		let entry = {
        title: tv, 
        content: cv, 
        count: id
      }; 
		this.props.actions.editSchedule(entry); 

    this.setState((prevState) => {
      return {
          buttonDisplay: 'none',
          button1: 'Add', 
          button2: 'Cancel'
      }; 
    }); 
    content.value = ''; // clear input
    title.value = ''; // clear input

  }

  /*
   * delete entry
   */
  deleteItem() {
    let content = document.getElementsByClassName('add-input-content')[0];  
    let title = document.getElementsByClassName('add-input-title')[0];  
    let id = this.state.id; 
		let entry = {
			count: id
		}; 
		this.props.actions.deleteSchedule(entry); 
    this.setState((prevState) => {
      return {
          buttonDisplay: 'none',
          button1: 'Add', 
          button2: 'Cancel'
      }; 
    }); 
    content.value = ''; 
    title.value = ''; 
  }

  addButtonClicked(e) {
    e.preventDefault(); 
    if (this.state.button1 == 'Add') {
      this.addSubmit(); 
    } else {
      this.editItem(); 
    }
  }
  cancelButtonClicked(e) {
    e.preventDefault(); 
    if (this.state.button2 == 'Cancel') {
      this.addHidePanel(); 
    } else {
      this.deleteItem(); 
    }
  }

  render() {

    const scheduleItems = this.props.scheduleItems;
		const scheduleTitle = this.props.scheduleTitle; 

    return (
        <div id="main-frame">
          <div className="add-task-panel"
          style={{display: `${this.state.buttonDisplay}`}}>
          <form style={{height: "100%"}} id="add-form"
          onSubmit={function(e){e.preventDefault(); }}>
              <input type="text" className="add-input-title"
              placeholder="Title..." onFocus={function(e) {e.target.placeholder
              = '';}} onBlur={function(e) {e.target.placeholder = 'Title...'; }} />
              <textarea type="text" className="add-input-content"
              placeholder="Content..." onFocus={function(e)
              {e.target.placeholder ='';}} onBlur={function(e) {e.target.placeholder = 'Content...'; }}></textarea>
              <input className="pic-text submit-button button-color add-button" type="submit"
                   value={this.state.button1} onClick={this.addButtonClicked} />
              <input className="pic-text submit-button button-color cancel-button" type="submit"
                   value={this.state.button2} onClick={this.cancelButtonClicked} />
          </form>
          </div>
          <div className="schedule">
          <div className="schedule-title">
              <span id="title">{`Date:${scheduleTitle.start} - ${scheduleTitle.end}, ${scheduleTitle.day} days`}</span>
              <span>
                  <input className="pic-text submit-button button-color" type="submit"
                  style={{margin: "0px"}} value="Add" onClick={this.addShowPanel}/>
              </span>
          </div>
      
          <div className="schedule-line"></div>
          <table className="schedule-table">
              {scheduleItems.map(entry =>  
              <tbody key={`entry${entry.count}`}>
                <tr className={`entry${entry.count}`}>
                  <td><div className="circle schedule-dot"></div></td>
                  <td><div className="date-title" id={`title${entry.count}`}>{entry.title}</div></td>
                </tr>
                <tr className={`entry${entry.count}`}>
                  <td></td>
                  <td><div className="schedule-description"
                  id={`content${entry.count}`}>{entry.content}</div></td>
                  <td><input className="pic-text submit-button button-color" type="submit"
                  style={{margin: "0px"}} id={`button${entry.count}`} value="Edit"
                  onClick={this.editShowPanel}/></td>
                </tr>
              </tbody>

              )}
          </table>
          </div>
          <Chat />
        </div>
    );
  }
} 

Schedule.propTypes = {
  scheduleTitle: PropTypes.object.isRequired,
  scheduleItems: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log(state); 
  return {
    scheduleTitle: {
			start: state.schedule.scheduleMisc.start, 
			end: state.schedule.scheduleMisc.end, 
			day: state.schedule.scheduleMisc.day
		}, 
		scheduleItems: state.schedule.scheduleItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(scheduleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);

//export default Schedule;
