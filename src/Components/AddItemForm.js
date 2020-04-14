import React, { Component } from 'react';
import axios from 'axios';
import SearchList from './SearchList';


class AddItemForm extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: [],
            searchItems: {
                itemName: '',
                itemImg: '',
            },
            loaded: false
        }
    }

        // userInput = React.createRef();

    componentDidMount() {
        axios.get('https://api.edamam.com/api/food-database/parser?ingr=apple&page=0&app_id=f0d6df51&app_key=da585cc03d43164f5e94d2df90eefbde')
            .then(response => {
                const data = response.data;
                this.setState({
                    searchItems: {
                        itemName: data.parsed[0].food.label,
                        itemImg: data.parsed[0].food.image
                    }
            
                })
            });
            
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            loaded: true
        });
        console.log('this button has been clicked and is being processed');
    }


    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Type an Item" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Search</button>
                </form>
            </div>
        );
    }

};

export default AddItemForm;