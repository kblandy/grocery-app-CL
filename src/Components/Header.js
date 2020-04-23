import React from 'react';
import GroceryListStats from './GroceryListStats';

const Header = ({ items, title, location, date }) => {

    return (
        <header>
            <div className="container">
                <h1>{title}</h1>
                    <div className="d-inline-flex">
                        <p className="p-2">Zipcode: {location}</p>
                        <p className="p-2">Date: {date}</p>
                    </div>
                    <div>
                    <GroceryListStats 
                                items={items}
                            /> 
                    </div>
            </div>
            
        </header>
        


    );
};

export default Header;