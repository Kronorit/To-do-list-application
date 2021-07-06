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
      tasks: [],
      title: 'Lorem Ipsum Dolor'
    };

    // Binded functions

    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
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

  // Edit a task.

  editTask(id, title) {
    const tasks = this.state.tasks;
    for (let i in tasks){
      if (parseInt(tasks[i].id) === parseInt(id)) {
        tasks[i].title = title;
        break;
      } 
    }
    this.setState({tasks: tasks});
  }

  render() {
    return (
      <div>
        <BarNav/>
        <TaskForm addTask={this.addTask}/>
        <div className="content">
          <h2 className="task-list-title">{this.state.title}</h2>
          <Tasks 
            tasks={this.state.tasks}
            tasksDone={this.state.tasksDone} 
            tasksUndone={this.state.tasksUndone} 
            toggleCompleted={this.toggleCompleted} 
            deleteTask={this.deleteTask}
            editTask={this.editTask}
          />
        </div>
      </div>

    );
  }

}

export default App;