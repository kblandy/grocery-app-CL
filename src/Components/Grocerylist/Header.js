import React from 'react';
import GroceryListStats from './GroceryListStats';

const Header = ({ items, title, location, date }) => {

    return (
        <header>
            <div className="container">
                <h2 className="header-title">{title}</h2>
                    <div className="d-inline-flex">
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