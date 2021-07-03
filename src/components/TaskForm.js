import React from 'react';

import './components-css/TaskForm.css';

class TaskForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({title: e.target.value});
    }

    render() {
        return (
            <form 
                className="create-task-form" 
                onSubmit={e => {
                    this.props.addTask(this.state.title)
                    e.preventDefault();
                }}
            >
                <input type="text" id="create-task-title" placeholder="Create a new task." required onChange={this.handleChange}/>
                <input type="submit" id="create-task-button" value="+"/>
            </form>
        );
    }
}

export default TaskForm;