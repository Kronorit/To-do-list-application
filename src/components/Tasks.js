import React from 'react';

import TasksUndone from './TasksUndone.js';
import TasksDone from './TasksDone.js';

class Tasks extends React.Component{

    render() {
        return (
            <div className="tasks">
                <TasksUndone 
                    tasks={this.props.tasks}
                    toggleCompleted={this.props.toggleCompleted} 
                    deleteTask={this.props.deleteTask}
                    editTask={this.props.editTask}
                />
                <hr/>
                <TasksDone 
                    tasks={this.props.tasks}
                    toggleCompleted={this.props.toggleCompleted} 
                    deleteTask={this.props.deleteTask}
                    editTask={this.props.editTask}
                />
            </div>
        );
    }
}

export default Tasks;