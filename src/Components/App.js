import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Item from './Item';
import AddItemForm from './AddItemForm';

class App extends Component {

  //items need state because their value will change

  constructor(){
    super();
    this.state={
      items: []
    };
  }
  
  //keeps track of previous items in list
  prevItemId = 0;

  // componentDidMount() {
  //   fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  //     .then(response => response.json())
  //     .then(responseData => {
  //       this.setState({ items: responseData.data });
  //     })
  //     .catch(error => {
  //       console.log('Error fetching and parsing data: ', error)
  //     });

  // }

  //adds item to items array in state object
  handleAddItem = (name) => {
    this.setState( prevState => {
      return {
        items: [
          ...prevState.items,
          {
            name,
            price: 'price',
            id: this.prevItemId += 1
          }
        ]
      }
    });
  }

  //removes item from items state object array
  handleRemoveItem = (id) => {
    console.log("item removed ", id);
    this.setState( prevState => {
      return {
        items: prevState.items.filter( i => i.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="main-container">
      <Navigation />

      {/* Header Component */}
        <Header 
          title="FOOD LIST"
          items={this.state.items}
        />

      {/* Items List */}
      {this.state.items.map( (item, index) =>
        <Item 
          id={item.id}
          name="item"
          price={item.price} 
          key={item.id}
          index={index}
          removeItem={this.handleRemoveItem}

        />
      )}
        {/* AddItemForm Component */}
        <AddItemForm
          addItem={this.handleAddItem}
        />
      </div>
    );
  }

}

export default App;