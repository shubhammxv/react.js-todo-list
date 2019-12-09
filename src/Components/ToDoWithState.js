import React, {Component} from 'react';
import ActiveTask from './ActiveTasks';
import AddTask from './AddTask';
import Completed from './CompletedTasks';
import AllTasks from './AllTasks';
import '../Styles/ToDo.css';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTasks: [],
            completedTasks: [],
            taskIds: [],
            allTasks: {},
            currentTask: ''
        }
        this.taskIds = []
    }

    handleOnChange = (value) => {
        this.setState({ currentTask: value })
      }
      
    handleOnAddTask = () => {
        const taskId = Date.now();
        this.taskIds.push(taskId)
        if (this.state.currentTask !== ''){
          this.setState({
            activeTasks: [...this.state.activeTasks, taskId],
            allTasks: { ...this.state.allTasks, [taskId]: this.state.currentTask },
            currentTask: ''
        })
      }
    }
  
    handleOnMarkComplete = (taskId) => {
      let activeT = this.state.activeTasks;
      activeT.splice(activeT.indexOf(taskId), 1);
      this.setState({
          activeTasks: [...activeT],
          completedTasks: [...this.state.completedTasks, taskId]
      })
    }

    handleOnMarkIncomplete = (taskId) => {
      let completedT = this.state.completedTasks;
      completedT.splice(completedT.indexOf(taskId), 1);
        this.setState({
            activeTasks: [...this.state.activeTasks, taskId],
            completedTasks: [...completedT]
        })
    }

  render() {
      const { allTasks, activeTasks, completedTasks } = this.state;
    return (

      <div className="wrapper">
        <div className="addTask">
          <AddTask
            onAddTask={this.handleOnAddTask}
            handleOnChange={this.handleOnChange}
            currentTask={this.state.currentTask}
            />
        </div>
        <div className="tasks-wrapper">
            <ActiveTask
              activeTasks={activeTasks}
              allTasks={allTasks}
              onMarkComplete={this.handleOnMarkComplete}
            />
            <AllTasks
              taskIds={this.taskIds}
              allTasks={allTasks}
            />
            <Completed
              completedTasks={completedTasks}
              allTasks={allTasks}
              onMarkIncomplete={this.handleOnMarkIncomplete} 
            />
          </div>
        </div>    
    )
  }
}

export default ToDo;