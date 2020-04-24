import React from 'react';

const GroceryListStats = ({ items, prices }) => {

    const totalItems = items.length;

    //const totalItemsPrice -> add up all of the price.items and return total price

    return (
        <span>
                <p>
                Total Items: { totalItems }
                </p>
        </span>
    );
};

export default GroceryListStats;