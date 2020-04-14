  // //items need state because their value will change

  // constructor(){
  //   super();
  //   this.state={
  //     items: []
  //   };
  // }
  
  // //keeps track of previous items in list
  // prevItemId = 0;

  // // componentDidMount() {
  // //   fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  // //     .then(response => response.json())
  // //     .then(responseData => {
  // //       this.setState({ items: responseData.data });
  // //     })
  // //     .catch(error => {
  // //       console.log('Error fetching and parsing data: ', error)
  // //     });

  // // }

  // //adds item to items array in state object
  // handleAddItem = (name) => {
  //   this.setState( prevState => {
  //     return {
  //       items: [
  //         ...prevState.items,
  //         {
  //           name,
  //           price: 'price',
  //           id: this.prevItemId += 1
  //         }
  //       ]
  //     }
  //   });
  // }

  // //removes item from items state object array
  // handleRemoveItem = (id) => {
  //   console.log("item removed ", id);
  //   this.setState( prevState => {
  //     return {
  //       items: prevState.items.filter( i => i.id !== id)
  //     };
  //   });
  // }

  
    // handleShowItems() {
    //     this.showItems();
    // };

    // showItems() {
    //     if (this.state.loaded) {
    //         return (

    //             <div className="container">
    //                 <form onSubmit={this.handleSubmit}>
    //                     <input 
    //                         type="text" 
    //                         placeholder="Type an Item" 
    //                         value={this.state.searchItems}
    //                         onChange={this.handleChange}

    //                         />
    //                     <button onClick={this.handleChange}>Search</button>
    //                 </form>
    
    //                 <div>
    //                     <SearchList 
    //                         data={this.state.input}
    //                         showData={this.showItems}
    //                     />
    //                 </div>
    //             </div>
    //         )
    //     }
    // };