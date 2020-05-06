import React from 'react';

const GroceryListStats = ({ items, prices }) => {

    const totalItems = items.length;

    //returns length of items that are added in GroceryList  by user
    return (
        <span>
                <p>
                Total Items: { totalItems }
                </p>
        </span>
    );
};

export default GroceryListStats;