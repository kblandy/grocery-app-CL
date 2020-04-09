import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <ul className="nav-container">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/newlist">New List</Link></li>
                <li><Link to="/mylists">My Lists</Link></li>
            </ul>
        );
    }
};

export default Navigation;