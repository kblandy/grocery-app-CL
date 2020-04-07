import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//App Components
import Navigation from './Navigation';
import Home from './Home';
import GroceryList from './GroceryList';


class App extends Component {

  render() {
    return (

      <div>

        {/* Routes */}
        <BrowserRouter>

          <Route path="/" component={Navigation} />
          <Route exact path="/home" component={Home} />
          <Route path="/newList" component={GroceryList} />



          {/* <GroceryList /> */}
        

        </BrowserRouter>
      </div>

      
    );
  }

}

export default App;
