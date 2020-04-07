import React from 'react';
import GroceryListStats from './GroceryListStats';
import Location from './Location';

const Header = ({ items, title }) => {
    return (
        <header>
            <div className="container">
            <h1>{title}</h1>
            <GroceryListStats 
                    items={items}
                /> 
            <Location />
            </div>
            
        </header>
        


    );
};

export default Header;