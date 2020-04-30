import React, { Component } from 'react';
import Header from './Header'
import Item from './Item';
import AddItemForm from './AddItemForm';

class GroceryList extends Component {

    //items need state because their value will change

  constructor() {
    super();
    this.state = {
      //empty array to hold the items user adds from SearchList
      items: [],
      searchValue: ''
    };
  }
  
  //keeps track of previous items in list
  prevItemId = 0;

  //adds item to items array in state object
  handleAddItem = (name, image) => {
    this.setState( prevState => {
      return {
        items: [
          ...prevState.items,
          {
            name: name,
            id: this.prevItemId += 1,
            image: image
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
            <div className="div-fix-collapse">
                {/* Header Component */}
                <Header 
                title={localStorage.getItem('userListName')}
                location={localStorage.getItem('userListZipcode')}
                date={localStorage.getItem('userListDate')}
                items={this.state.items}
                />

                {/* Items List */}
                {this.state.items.map( (item, index) =>
                  <div className="item-container">
                    <Item 
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    key={item.id}
                    index={index}
                    removeItem={this.handleRemoveItem}
                    />
                  </div>
                )}
                    {/* AddItemForm Component */}
                    <AddItemForm
                    //now the search value can be retrieved for functions
                      // searchValue={localStorage.getItem('inputValue')}
                      addItem={this.handleAddItem}
                      inputPlaceholder="Search Food Stock"
                    />
            </div>
            
        );
    }
}

export default GroceryList;