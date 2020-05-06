import React, { Component } from 'react';
import axios from 'axios';
import SearchList from './SearchList';

const API_KEY = 'da585cc03d43164f5e94d2df90eefbde';
const APP_ID  = 'f0d6df51';


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
      let request = axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${this.state.inputValue}&page=0&app_id=${APP_ID}&app_key=${API_KEY}`);

      request.then(response => {
        const data = response.data;
        // console.dir(data);
        this.setState({
          searchItems: [{
            itemName: data.parsed[0].food.label,
            itemImage: data.parsed[0].food.image
          }]
        })
      })
      .catch(error => {
        console.warn('Error fetching and parsing data: ', error)
        alert("Item not found. Please try another Search.")
      });
    }

    //when search button is clicked
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        submitted: true,
      });
      //fetches data using the user input
      this.getItem();

    };

    //puts user value into state
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
      if (!this.state.submitted) {
        return searchForm;
      }
      else {
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