import React from 'react';

const GroceryListStats = ({ items, prices }) => {

    const totalItems = items.length;
    const totalItemsPrice = "$--";

    //const totalItemsPrice -> add up all of the price.items and return total price

    return (
        <span>
                <p>
                Total Items: { totalItems }
                </p>
                <p>
                Total Price: {totalItemsPrice}
                </p>
        </span>
    );
};

export default GroceryListStats;