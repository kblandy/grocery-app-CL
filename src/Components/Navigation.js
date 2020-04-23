import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="navbar">
                    <li className="nav-link"><Link to="/home">Home</Link></li>
                    <li className="nav-link"><Link to="/newlist">New List</Link></li>
                    <li className="nav-link"><Link to="/mylists">My Lists</Link></li>
                </ul>
            </div>
        );
    }
};

export default Navigation;