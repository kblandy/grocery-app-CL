import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <ul className="nav-container">
                <li>Home</li>
                <li>New List</li>
                <li>My Lists</li>
            </ul>
        );
    }
};

export default Navigation;