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





    //CSS SCRAP HERE

    /* Element styles

a {
  text-decoration: none;
  color: white;
  margin: auto;
}

button {
  color: white;
  background: lightslategrey;
  padding: 5px;
  border-radius: 6px;
  border: solid black 1px;
}

h3 {
  padding: 5px;
  font-size: 30px;
  letter-spacing: 4px;
}

h4 {
  margin: 0;
  padding: 4px;
  font-weight: bolder;
}


img {
  width: 95%;
  height: auto;
  padding: 30px;

}

input {
  padding: 10px;
  margin: 2px;
  text-align: center;
}


li {
  list-style: none;
  margin: 5px;
}

p {
  text-align: center;
  width: 400px;
  margin: auto;
  padding: 4px;
}

/* Class Styles */

/* .add-button {
  height: 10%;
  width: auto;
  align-self: center;
}

.container,
.nav-container{
  display: flex;
  margin: auto;
  padding: 2px;
}

.container {
  border: solid black 1px;
  justify-content: space-evenly;
  width: 75%;
}

.container-covid-stats {
  border: 1px solid black;
  width: 280px;
  height: auto;
  margin: auto;
}

.container-item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
}

.container-new-list {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  margin: auto;
  border: solid black 1px;
}

.covid-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-around;
  margin: auto;
  padding: 2px;
  width: 50%;

}

.covid-header {
  font-size: 25px;
  text-decoration: underline;
  margin: 10px;
}

.covid-title {
  font-weight: lighter;
  font-size: 20px;
}

.covid-stat {
  color: maroon;
  font-size: 20px;
  letter-spacing: 3px;
  align-self: center;
} */

/* hides searchlist div */
/* .hidden-container {
  display: none;
}

.link-credit {
  color: black;
}

.list-title {
  text-align: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
}

.main-page {
  display: flex;
  flex-direction: column;
  width: 65vw;
  margin: auto;
  text-align: center;
}

.nav-container {
  background: lightslategrey;
  color: white;
  display: flex;
  justify-content: space-between;
  height: 10vh;
  width: 75%;

}

.search-results-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  border: solid black 1px;
  margin: auto;
}


.span-covid-global,
.span-covid-deaths {

  flex-direction: row;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
} */ 




/*ID Styles*/




}

