import React, { Component } from 'react';
import axios from 'axios';


// const apiKey = 'da585cc03d43164f5e94d2df90eefbd';
// const appId = 'f0d6df51';



class SearchList extends Component {

    constructor() {
        super();
        this.state = {
            loaded: false,
            //items searched here
            searchItems: [],
            addItem: false,
            searchCleared: false
        }
    }

    componentDidMount() {
        let request = axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${this.props.searchValue}&page=0&app_id=f0d6df51&app_key=da585cc03d43164f5e94d2df90eefbde`);

        request.then(response => {
            const data = response.data;
            console.dir(data);
            this.setState({
                loaded: true,
                searchItems: [{
                    itemName: data.parsed[0].food.label,
                    itemImage: data.parsed[0].food.image
                }]
        
            })
        })
            .catch(error => alert('There was an error processing. Reload page and try another search: ', error));
    }
            
    handleClick(name, image) {
        this.props.addItem(name, image);

        this.setState({
            addItem: true
        })

        //addItem function from AddItem form should go here; callback!
        console.log('add item button has been clicked');
    };

    //sets the clearButton state to false so that program can cycle through again
    handleClearSearch() {

        this.setState({
            searchCleared: true
        })

    };
    

    render() {
        console.log("current state is: ", this.state.searchCleared);

        var { loaded, searchItems } = this.state;

        if(!loaded) {
            return <div>Loading...</div>;
        }
        if(loaded) {

            if(this.state.searchCleared === true) {

                return (
                    null

                )

            } else {
                return (

                    <div className="search-results-container" id="searchlist-div">
    
                    {/* loops through api requested item and displays its name and image */}
                        {searchItems.map((searchItem, index) =>
                            <div className="container-item" key={index}>
                                <h3>{searchItem.itemName}</h3>
                                <img src={searchItem.itemImage} alt="" />
                                <button onClick={() => {this.handleClick(searchItem.itemName, searchItem.itemImage)}} className="add-button">Add item!</button>
                                <button onClick={() => {this.handleClearSearch()}}className="add-button">Reset</button>
                            </div>
                        )}
                    </div>
                );   
            }
            
        };
        
    };
};

    
export default SearchList;
