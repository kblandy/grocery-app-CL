import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//App Components
import Navigation from './Navigation';
import Home from './Home';
import NewList from './NewList';
import GroceryList from './GroceryList';


class App extends Component {

  render() {
    return (

      <div className="container">

        {/* Routes */}
        <BrowserRouter>

          <Route path="/" component={() =>
            <Navigation
              title="Doubleplus Shopping List" 

              />} />
          <Route path="/home" component={Home} />
          <Route exact path="/newlist" component={() => 
                  <NewList 
                    title="Create New List" 
                    subtitle="Fill out the info below to create a new list"
                    // userList={this.userList}
                    // createList={this.handleCreateList}
                    />} />
          <Route exact path="/mylists" component={GroceryList} />

          <div>
            <footer>This Paper Property of INGSOC</footer>
            </div>


          {/* <GroceryList /> */}
        

        </BrowserRouter>
      </div>

      
    );
  }

}

export default App;
