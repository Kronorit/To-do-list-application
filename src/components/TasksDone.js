import React from 'react';

import Task from './Task.js'

class TasksDone extends React.Component {

    render() {    
        const tasksDone = this.props.tasks.filter(task => task.completed === true);
        return (
            <div className="tasks-done">
                {tasksDone.map(task => {
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

export default TasksDone;