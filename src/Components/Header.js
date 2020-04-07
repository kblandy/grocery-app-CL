import React, { Component } from 'react';
import GroceryListStats from './GroceryListStats';
import Location from './Location'

const Header = ({ items, title }) => {
    return (
        <header>
        <div className="container">
        <GroceryListStats 
                items={items} 
            /> 
        <Location />
        </div>
        
        <h1>{title}</h1>
        </header>
    );
};

export default Header;