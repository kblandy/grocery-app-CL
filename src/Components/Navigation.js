import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {


    render() {
        //creates the today's date in newspaper header
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var today = new Date();


        var newsDate = (today.getDate() + ' ' + monthNames[today.getMonth()] + ', ' + (today.getFullYear()));

        return (

            <div>
 

                <span>
                <h3 className="nav-header">{this.props.titleTop}</h3>
                <h4 className="nav-date">{newsDate}</h4>
                <h3 className="nav-header-bottom">{this.props.titleBottom}</h3>
         
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