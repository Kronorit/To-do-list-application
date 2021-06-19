import React from 'react';

//Components

import Task from './Task.js'

class Tasks extends React.Component {

  render() {
    return(
      <div className="tasks">
        <Task/>
      </div>
    );
  }
}

export default Tasks;