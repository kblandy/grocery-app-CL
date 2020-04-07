import React, { Component } from 'react';
import GroceryListStats from './GroceryListStats';

const Header = ({ items, title}) => {
    return (
        <header>
            <GroceryListStats 
                items={items} 
            />
        <h1>{title}</h1>
        </header>
    );
};

export default Header;