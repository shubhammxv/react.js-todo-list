import React, { Component } from 'react';
import '../Styles/ToDo.css';

class AllTasks extends Component {

    renderAllTasks = (taskIds, allTasks) => (
        taskIds.map(taskId => (
            <div key={taskId} className="task-item">
                {allTasks[taskId]}
            </div>
        ))
      )
  
      render() {
          const { taskIds, allTasks } = this.props;
          return (
              <div className="task-category">
                <div className="task-header">All Tasks</div>
                <div className="task-column">
                  {this.renderAllTasks(taskIds, allTasks)}
                </div>
              </div>
          )
      }
}

export default AllTasks;