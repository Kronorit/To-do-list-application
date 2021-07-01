import React from 'react';

import Task from './Task.js'

class TasksUndone extends React.Component {

    render() {  
        const tasksUndone = this.props.tasks.filter(task => task.completed !== true);
        return (
            <div className="tasks-undone">
                {tasksUndone.map(task => {
                    return(
                        <Task 
                            title={task.title} 
                            completed={task.completed} 
                            id={task.id} 
                            toggleCompleted={this.props.toggleCompleted} 
                            deleteTask={this.props.deleteTask} 
                            key={task.id}
                        />
                    );
                })}
            </div>) 
    }
}

export default TasksUndone;