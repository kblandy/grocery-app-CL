import React, { Component } from 'react';
import axios from 'axios';

class SearchList extends Component {

    constructor() {
        super();
        this.state = {
            searchItems: [],
            loaded: true
        }
    }

        // userInput = React.createRef();

    componentDidMount() {
        let request = axios.get('https://api.edamam.com/api/food-database/parser?ingr=apple&page=0&app_id=f0d6df51&app_key=da585cc03d43164f5e94d2df90eefbde');

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



    render() {
        return (
            <div>
                {this.state.searchItems.map((item, index) =>
                <div key={index}>
                <h3>{item.itemName}</h3>
                <img src={item.itemImage} />
                </div>
                )}
            </div>
        );
    };

};
    
export default SearchList;
