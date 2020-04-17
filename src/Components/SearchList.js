import React, { Component } from 'react';
import axios from 'axios';

// import api_key from '../apiKey';
// import app_id from '../apiKey';

// const api = require('../');


class SearchList extends Component {

    constructor() {
        super();
        this.state = {
            searchItems: [],
            loaded: false
        }
    }

    componentDidMount() {

        let request = axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${this.props.searchValue}&page=0&app_id=f0d6df51&app_key=da585cc03d43164f5e94d2df90eefbde`);

        request.then(response => {
            const data = response.data;
            this.setState({
                loaded: true,
                searchItems: [{
                    itemName: data.parsed[0].food.label,
                    itemImage: data.parsed[0].food.image
                }]
        
            })
        });



    }

            


    handleClick = (event) => {
        event.preventDefault();
        console.log('add item button has been clicked');
    };

    render() {

        var { loaded, searchItems } = this.state;

        if(!loaded) {
            return <div>Loading...</div>;
        }
        else {
            return (

                // <div className="search-results-container" id="searchlist-div">
                //     <ul>
                //         {searchItems.map(item => 
                //             <li key={item.id}>
                //                 {item.hints[0].food.foodId}
                //                 {/* {item.parsed[0].food.image} */}
                //             </li>
                //         )}
                //     </ul>
                // </div>



                <div className="search-results-container" id="searchlist-div">
                {/* loops through api requested items and displays their name and image */}
                    {searchItems.map((searchItem, index) =>
                        <div className="container-item" key={index}>
                            <h3>{searchItem.itemName}</h3>
                            <img src={searchItem.itemImage} alt="" />
                            <button onClick={this.handleClick}className="add-button">Add item!</button>
                        </div>
                    )}
                </div>
            );   
        }
        
    };
};

    
export default SearchList;
