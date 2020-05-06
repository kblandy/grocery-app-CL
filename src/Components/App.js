import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//App Components
import Navigation from './Navigation';
import Home from './Homepage/Home';
import NewList from './NewList';
import GroceryList from './Grocerylist/GroceryList';
import Footer from './Footer';


class App extends Component {

  render() {

    return (

      <div className="container">

        {/* Routes */}
        <BrowserRouter>

          <Route path="/" component={() =>
            <Navigation
              titleTop="Doubleplus" 
              titleBottom="Shopping List"
              />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/newlist" component={() => 
                  <NewList 
                    title="Create New List" 
                    subtitle="Fill form to create new list"
                    />} />
          <Route exact path="/mylists" component={GroceryList} />
          
          {/* Footer */}
          <div>
            <Footer />
          </div>
        
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
