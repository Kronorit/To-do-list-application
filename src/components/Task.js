import React from 'react';
import './components-css/Task.css';

class Task extends React.Component{

    render(){
        const isCompleted = this.props.completed;
        return(
            <div className="task">
                <h2 className={"task-title " + (isCompleted  ? "task-done" : "task-undone")}>{this.props.title}</h2>
                <input 
                    type="checkbox" 
                    className="toggle-completed" 
                    id={"task" + this.props.id} 
                    onChange={() => {this.props.toggleCompleted(this.props.id);}}
                    checked= {isCompleted}
                />
                <label className="input-label" htmlFor={"task" + this.props.id}></label>
                <button 
                    className="task-delete-button" 
                    onClick={() => {this.props.deleteTask(this.props.id)}}>
                        X
                </button>
            </div>
        );
    }
}

export default Task;