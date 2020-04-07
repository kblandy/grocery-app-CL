import React, { Component } from 'react';
import Header from './Header';
import Item from './Item';
import AddItemForm from './AddItemForm';

class App extends Component {


  constructor(){
    super();
    this.state={
      items: []
    };
  }

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

        <AddItemForm
          addItem={this.handleAddItem}
        />
      </div>
    );
  }

}

export default App;
