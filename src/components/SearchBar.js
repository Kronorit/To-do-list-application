import React from 'react'

import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return(
    <form className="search-bar">
      <input id="bar" type="text" placeholder ="Search a task"/>
      <button id="button">Buscar</button>
    </form>
    );
  }    
}

export default SearchBar;