import React, { Component } from 'react';
import Header from './Header'
import Item from './Item';
import AddItemForm from './AddItemForm';

class GroceryList extends Component {

    //items need state because their value will change

  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  
  //keeps track of previous items in list
  prevItemId = 0;

  //adds item to items array in state object
  handleAddItem = (name) => {
    this.setState( prevState => {
      return {
        items: [
          ...prevState.items,
          {
            name,
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
      console.log(this.state.items);
        return (
            <div>
                {/* Header Component */}
                <Header 
                title={localStorage.getItem('userListName')}
                location={localStorage.getItem('userListZipcode')}
                date={localStorage.getItem('userListDate')}
                items={this.state.items}
                />

                {/* Items List */}
                {this.state.items.map( (item, index) =>

                    <Item 
                    id={item.id}
                    name="item"
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

export default GroceryList;