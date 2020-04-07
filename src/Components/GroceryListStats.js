import React, { Component } from 'react';

const GroceryListStats = ({ items, price }) => {

    const totalItems = items.length;
    const totalItemsPrice = items.price;

    //const totalItemsPrice -> add up all of the price.items and return total price

    return (
        <span>
                <p>
                Total Items: { totalItems }
                </p>
                <p>
                Total Price: { totalItemsPrice}
                </p>
        </span>
    );
};

export default GroceryListStats;