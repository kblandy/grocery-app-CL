import React, { Component } from 'react';
import SearchList from './SearchList';


class AddItemForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: [],
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

//when search button is clicked
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        }
        )

        console.log('this button has been clicked and is being processed');
        //logs the user's value object
        console.log(this.state.inputValue);
        
    }


    handleChange = ({ target }) => {
        //target.name is returning name attribute from the selected input area (searchfield)
        this.setState((prevState) => ({
            inputValue: {
                ...prevState.inputValue,
                [target.name]: target.value
            }
        }));
        localStorage.setItem(target.name, target.value);
    };
    
// will render Form with SearchList after the form is submitted
    render() {
        let searchForm = 
            <div>
                <div className="container-item">
                    <form>
                        <input 
                            type="text" 
                            name="inputValue" 
                            onChange={this.handleChange} 
                            placeholder="Type an Item"
                        />

                        <button onClick={this.handleSubmit}>Search</button>
                            
                    </form>
                </div>
            </div>

        if (this.state.submitted === false) {
            return (
                searchForm
            );
        } if (this.state.submitted === true ) {
            return (
                <div>
                <div className="container-item">
                    <form>
                        <input 
                            type="text" 
                            name="inputValue" 
                            onChange={this.handleChange} 
                            placeholder="Type an Item"
                        />
        
                        <button onClick={this.handleSubmit}>Search</button>
                            
                    </form>
                </div>

{/* SearchList Component */}
                <div>

                    <SearchList
                        searchValue={this.state.inputValue}
                    />

                </div>
                </div>
            );
        }
    }


        

};

export default AddItemForm;