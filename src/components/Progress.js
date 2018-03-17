import React from 'react';
import style from '../styles/progress.module.css';
import '../styles/progress.css';
import Chat from "./common/Chat";
import classNames from 'classnames'; 

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
          <div className={style.scheduleleft}>
            <div className={style.scheduletitle}><span className={style.othername}>Shantao</span>'s</div>
            <div className={style.scheduleline}></div>
            <table className={style.scheduletable}>
                {this.state.todoLeft.map(item => 
                      <tbody key={`left${item.count}`}>
                        <tr>
                          <td><div className={`circle-${item.color} schedule-dot`}></div></td>
                          <td><div className={style.datetitle}>{item.title}</div></td>
                        </tr>
                        <tr>
                          <td></td><td><div
                          className={style.scheduledescription}>{item.content}</div></td>
                        </tr>
                      </tbody>
                )}
            </table>
            </div>

          <div className={style.scheduleright}>
            <div className={style.scheduletitle}>Yours</div>
            <div className={style.scheduleline}></div>
            <table className={style.scheduletable}>
                {this.state.todoRight.map(item => 
                      <tbody key={`right${item.count}`}>
                        <tr>
                          <td><div className={`circle-${item.color} schedule-dot`}></div></td>
                          <td><div className={style.datetitle}>{item.title}</div></td>
                        </tr>
                        <tr>
                          <td></td><td><div
                          className={style.scheduledescription}>{item.content}</div></td>
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
