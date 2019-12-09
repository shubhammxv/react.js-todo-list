import React, { Component } from 'react';
import '../Styles/ToDo.css';

class ActiveTask extends Component {

    renderActiveTasks = (activeTasks, allTasks) => (
        activeTasks.sort((a,b) => a-b).map(taskId => (
            <div key={taskId} className="task-item">
                <input type="checkBox" onChange={() => this.props.onMarkComplete(taskId)}></input>
                {allTasks[taskId]}
            </div>
        ))
    )
  
      render() {
          const { activeTasks, allTasks } = this.props;
          return (
              <div className="task-category">
                  <div className="task-header">Active Tasks</div>
                  <div className="task-column">
                    {this.renderActiveTasks(activeTasks, allTasks)}
                  </div>
              </div>
          )
      }
}

export default ActiveTask;