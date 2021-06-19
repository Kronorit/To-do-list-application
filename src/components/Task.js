import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks:[]};
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        this.setState({tasks: data});
    }
    
    render() {
        return(
            this.state.tasks.map(tasks => {
                return (
                    <div className="task" key={tasks.id}>
                        <p className="task-title">{tasks.title}</p>
                        <input type="checkbox"/>
                        <button className="deleteTaskButton">X</button>
                    </div>    
                );
            })
        );    
    }      
}

export default Task;