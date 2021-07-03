import React from 'react';

import './App.css';


// Components

import BarNav from './components/BarNav.js';
import TaskForm from './components/TaskForm.js';
import Tasks from './components/Tasks.js';

// Logic

import assignId from './logic/assignId';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

    // Binded functions

    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  // Fetch data from the server on component mount.

  async componentDidMount(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    this.setState({
      tasks: data,
    });
  }

  // Toggle completed property of an object.

  toggleCompleted(id) {
    const tasks = this.state.tasks;
    for (let task in tasks) {
      if(tasks[task].id === id){
        tasks[task].completed = !tasks[task].completed;
        break;
      }
    }
    this.setState({tasks: tasks});
  }

  // Delete a task.

  deleteTask(id) {
    const newTasks = this.state.tasks.filter(task => task.id !== id);

    this.setState({tasks: newTasks});
  }

  // Create a new task.

  addTask(title) {
    const tasks = this.state.tasks;
    if (title === null || title === undefined || title.trim() === '') alert("You have to write a title to create a new task");
    else {  
      tasks.unshift({
        id: assignId(tasks),
        title: title,
        completed: false
      });

      this.setState({
        tasks: tasks
      });
    }
  }

  render() {
    return (
      <div>
        <BarNav/>
        <div className="content">
          <TaskForm addTask={this.addTask}/>
          <Tasks 
            tasks={this.state.tasks}
            tasksDone={this.state.tasksDone} 
            tasksUndone={this.state.tasksUndone} 
            toggleCompleted={this.toggleCompleted} 
            deleteTask={this.deleteTask}
          />
        </div>
      </div>

    );
  }

}

export default App;