import React, { Component } from 'react';
import Navigation from './Navigation';
import GroceryList from './GroceryList';

class App extends Component {

  render() {
    return (
      <div className="main-container">

      <Navigation />

      <GroceryList />



      </div>
    );
  }

}

export default App;
