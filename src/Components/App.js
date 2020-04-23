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
              titleTop="Doubleplus" 
              titleBottom="Shopping List"
              />} />
          <Route path="/home" component={Home} />
          <Route exact path="/newlist" component={() => 
                  <NewList 
                    title="Create New List" 
                    subtitle="Fill form to create new list"
                    // userList={this.userList}
                    // createList={this.handleCreateList}
                    />} />
          <Route exact path="/mylists" component={GroceryList} />
          
          {/* Footer */}
          <div>
            <footer><img className="footer-image" src={require('../Images/1984-ingsoc.jpg')} alt="ingsoc logo" /> This Pamphlet Property of INGSOC</footer>
            </div>
            
            


          {/* <GroceryList /> */}
        

        </BrowserRouter>
      </div>

      
    );
  }

}

export default App;
