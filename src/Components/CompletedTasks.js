import React, { Component } from 'react';
import '../Styles/ToDo.css';

class Completed extends Component {
    renderCompletedTasks = (completedTasks, allTasks) => (
        completedTasks.sort((a,b) => a-b).map(taskId => (
            <div key={taskId} className="task-item">
                <input type="checkBox" onChange={() => this.props.onMarkIncomplete(taskId)} checked></input>
                {allTasks[taskId]}
            </div>
        ))
      )
  
      render() {
          const { completedTasks, allTasks } = this.props;
          return (
              <div className="task-category" >
                  <div className="task-header">Completed Tasks</div>
                  <div className="task-column">
                    {this.renderCompletedTasks(completedTasks, allTasks)}
                  </div>
              </div>
          )
      }
}

export default Completed;