import React from 'react';
import './components-css/Task.css';

class Task extends React.Component{

    state = {
        inputValue: this.props.title,
        edit: false
    }
    
    handleChange = e => {
        this.setState({inputValue: e.target.value});
    }

    blurHandler = () => {
        if (this.state.inputValue.trim() === "") {
            this.setState({inputValue: ""});
        }
        this.setState({edit: false});
        this.props.editTask(this.props.id, this.state.inputValue);
    }

    clickHandler = () => {
        this.setState({edit: true});
    }

    render(){
        return(
            <div id={"task" + this.props.id} className="task" onClick={() => {this.clickHandler();}} title="Edit task">
                {this.state.edit && !this.props.completed ? (<input type="text" id="input-title" value={this.state.inputValue} spellCheck="false" autoFocus={true} onChange={this.handleChange} onBlur={() => {this.blurHandler()}}/>) : (<h3 id={"title-task" + this.props.id} className={"task-title " + (this.props.completed  ? "task-done" : "task-undone")}>{this.props.title}</h3>)}
                <div className="task-buttons">
                    <input 
                        type="checkbox" 
                        className="toggle-completed" 
                        id={"input-task" + this.props.id} 
                        onChange={() => {this.props.toggleCompleted(this.props.id);}}
                        checked= {this.props.completed}
                    />
                    <label className="input-label" htmlFor={"input-task" + this.props.id} title="Mark as done"></label>
                    <button 
                        className="task-delete-button" 
                        onClick={() => {this.props.deleteTask(this.props.id)}}
                        title="Delete task"
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>    
            </div>
        );
    }
}

export default Task;