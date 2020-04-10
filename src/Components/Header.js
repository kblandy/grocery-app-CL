import React from 'react';
import GroceryListStats from './GroceryListStats';

const Header = ({ items, title, location, date }) => {

    return (
        <header>
            <div className="container">
            <h1>{title}</h1>
            <p>Zipcode: {location}</p>
            <p>Date: {date}</p>
            <GroceryListStats 
                    items={items}
                /> 

            </div>
            
        </header>
        


    );
};

export default Header;