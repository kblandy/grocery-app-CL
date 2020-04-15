import React, { Component } from 'react';
import axios from 'axios';

class SearchList extends Component {

    constructor() {
        super();
        this.state = {
            searchItems: [],
            loaded: false
        }
    }

        // userInput = React.createRef();

    componentDidMount() {
        let request = axios.get('https://api.edamam.com/api/food-database/parser?ingr=celery&page=0&app_id=f0d6df51&app_key=da585cc03d43164f5e94d2df90eefbde');

            request.then(response => {
                const data = response.data;
                this.setState({
                    searchItems: [{
                        itemName: data.parsed[0].food.label,
                        itemImage: data.parsed[0].food.image
                    }]
            
                })
            });
            
    };

    handleClick = (event) => {
        event.preventDefault();
        console.log('add item button has been clicked');
    };

    render() {
        return (
            <div className="search-results-container" id="searchlist-div">
            {/* loops through api requested items and displays their name and image */}
                {this.state.searchItems.map((item, index) =>
                    <div className="container-item" key={index}>
                        <h3>{item.itemName}</h3>
                        <img src={item.itemImage} alt="" />
                        <button onClick={this.handleClick}className="add-button">Add item!</button>
                    </div>
                )}
            </div>
        );   
    };

};
    
export default SearchList;
