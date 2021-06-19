import React from 'react';

import './App.css';

//Components

import Tasks from './components/Tasks.js';

class App extends React.Component {
  render() {
    return(
      <div className="content">
        <h1>To do list</h1>
        <Tasks/>
      </div>
    );
  }
}

export default App;