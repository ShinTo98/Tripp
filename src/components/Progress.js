import React from 'react';
import '../styles/progress.css';
import Chat from "./common/Chat";

class Progress extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      todoRight: [
        {
          title: 'todo1', 
          content: '[content]', 
          color: 'green', 
          count: 0
        }, 
        {
          title: 'todo2', 
          content: '[content]', 
          color: 'green', 
          count: 1

        }, 
        {
          title: 'todo3', 
          content: '[content]', 
          color: 'red', 
          count: 2

        }, 
        {
          title: 'todo4', 
          content: '[content]', 
          color: 'red', 
          count: 3

        }
      ], 
      todoLeft: [
        {
          title: 'todo1', 
          content: '[content]', 
          color: 'green', 
          count: 0

        }, 
        {
          title: 'todo2', 
          content: '[content]', 
          color: 'green', 
          count: 1

        }, 
        {
          title: 'todo3', 
          content: '[content]', 
          color: 'red', 
          count: 2

        }, 
        {
          title: 'todo4', 
          content: '[content]', 
          color: 'red', 
          count: 3

        }
      ] 
    }; 
  }

  render() {
    return (
        <div id="main-frame">
          <div className="schedule-left">
            <div className="schedule-title"><span className="other-name">Shantao</span>'s</div>
            <div className="schedule-line"></div>
            <table className="schedule-table">
                {this.state.todoLeft.map(item => 
                      <tbody key={`left${item.count}`}>
                        <tr>
                          <td><div className={`circle-${item.color} schedule-dot`}></div></td>
                          <td><div className="date-title">{item.title}</div></td>
                        </tr>
                        <tr>
                          <td></td><td><div
                          className="schedule-description">{item.content}</div></td>
                        </tr>
                      </tbody>
                )}
            </table>
            </div>

          <div className="schedule-right">
            <div className="schedule-title">Yours</div>
            <div className="schedule-line"></div>
            <table className="schedule-table">
                {this.state.todoRight.map(item => 
                      <tbody key={`right${item.count}`}>
                        <tr>
                          <td><div className={`circle-${item.color} schedule-dot`}></div></td>
                          <td><div className="date-title">{item.title}</div></td>
                        </tr>
                        <tr>
                          <td></td><td><div
                          className="schedule-description">{item.content}</div></td>
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

export default Progress;
