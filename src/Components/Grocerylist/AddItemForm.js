import React, { Component } from 'react';
import axios from 'axios';
import SearchList from './SearchList';


class AddItemForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        inputValue: [],
        submitted: false,
        searchItems: [],
        loaded: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
    // api call to Edamame Food Database

    getItem = () => {
      let request = axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${this.state.inputValue}&page=0&app_id=f0d6df51&app_key=da585cc03d43164f5e94d2df90eefbde`);

      request.then(response => {
        const data = response.data;
        console.dir(data);
        this.setState({
          searchItems: [{
            itemName: data.parsed[0].food.label,
            itemImage: data.parsed[0].food.image
          }]
        })
      })
    }

    //when search button is clicked
    handleSubmit = (event) => {
      event.preventDefault();
          //add item to form here with props->input value
      this.setState({
        submitted: true,
      });

      console.log("this button has been clicked and is being processed");

      //logs the user's value object
      console.log("input state value is: ", this.state.inputValue);
      //fetches data using the user input
      this.getItem();

    };

    handleChange = (input) => {
      this.setState((prevState) => {
        return {
          ...prevState,
          inputValue: input,
        }
      },
        () => localStorage.setItem("input", this.state.inputValue));
      
    };


    // will render Form with SearchList after the form is submitted
    render() {
      let searchForm = (

          <div>
            <form>
              <input
                type="text"
                name="inputValue"
                onChange={(e) => this.handleChange(e.target.value)}
                placeholder={this.props.inputPlaceholder}
              />
              <button onClick={this.handleSubmit}>Search</button>
            </form>
          </div>

      );
      if (this.state.submitted === false) {
        return searchForm;
      }
      if (this.state.submitted === true) {
        return (
          <div>
            <div>
              <form>
                <input
                  type="text"
                  name="inputValue"
                  onChange={(e) => this.handleChange(e.target.value)}
                  placeholder={this.props.inputPlaceholder}
                />
                <button onClick={this.handleSubmit}>Search</button>
              </form>
            </div>
            {/* SearchList Component */}
            <div>
              <SearchList 
                searchValue={this.state.inputValue}
                addItem={this.props.addItem}
                searchItems={this.state.searchItems}
                getItem={this.props.getItem}
               />
            </div>
          </div>
        );
      }
    }
  }
  export default AddItemForm;