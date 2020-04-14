import React, { Component } from 'react';
import SearchList from './SearchList';


class AddItemForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            loaded: true
        });
        console.log('this button has been clicked and is being processed');
    }


    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            inputValue: event.target.value
        })
    };
    

    render() {
        return (
            <div>
            <div className="container-item">
            <form>
                    <input onChange={this.handleSubmit} type="text" placeholder="Type an Item"/>
                    <button onClick={this.handleChange}>Search</button>
                </form>

            </div>
            <div className="search-results-container">
                <SearchList 

                />
                {/* <SearchList 
                    result-name={this.state.searchItems.itemName}
                    result-image={this.state.searchItems.itemImage}
                /> */}
                </div>
            </div>
        );
    }

};

export default AddItemForm;