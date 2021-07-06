import React from 'react'

import './components-css/SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return(
    <form className="search-bar">
      <input id="bar" type="text" placeholder ="Search a task"/>
      <button id="button"><i className=" fas fa-search"></i></button>
    </form>
    );
  }    
}

export default SearchBar;