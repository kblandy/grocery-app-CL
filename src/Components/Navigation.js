import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
 

                <span>
                <h3 className="nav-header">{this.props.title}</h3>
                    <ul className="navbar container">
                        <li className="nav-link"><Link to="/home">Home</Link></li>
                        <li className="nav-link"><Link to="/newlist">New List</Link></li>
                        <li className="nav-link"><Link to="/mylists">My Lists</Link></li>
                    </ul>
                </span>
            </div>
        );
    }
};

export default Navigation;