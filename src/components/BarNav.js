import React from 'react';

import SearchBar from './SearchBar.js';

import './components-css/BarNav.css';

class BarNav extends React.Component {

    render() {
        return(
            <nav className="nav-main">
                <h2 className="nav-title">
                    <span>Walkie</span>Taskie
                </h2>
                <SearchBar/>
                <button className="delete-tasks-button">Delete tasks done</button>
            </nav>
        );
    }

}

export default BarNav;


