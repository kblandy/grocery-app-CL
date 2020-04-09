import React, { Component } from 'react';
import GroceryList from './GroceryList';

class NewList extends Component {

    // //array to collect user's newList info
    // userData = [''];

    constructor(props) {
        super(props);
        this.state = {
            userListName: '',
            userListZipcode: '',
            userListDate: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //target is the input field, selected by input attribute 'name'
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });

        //stores values to localStorage
        localStorage.setItem(target.name, target.value);

    };

    handleSubmit(event) {
        event.preventDefault();
    };

    handleCreateNewList = () => {
        console.log('new list created!');

            return (
                //groceryList should have props from userinput state!
                <GroceryList 
                    title={this.state.userListName}
                    location={this.state.userListZipcode}
                    date={this.state.userListName}
                />
            );
        };
        // return (
        //     //groceryList should have props from userinput state!
        //     // <GroceryList 
        //     //     title={NewList.props.state.userListName}
        //     //     location={this.state.userListZipcode}
        //     //     date={this.state.userListName}
        //     // />
        // )
    

    // handleUserData() {
    //     const user = {
    //         userListName: this.state.userListName
    //     }
    //     console.log(user);
    // }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="container-new-list">
                <h2>{this.props.title}</h2>
                <h4>{this.props.subtitle}</h4>
                {/* input attribute 'name' is called as target in handleChange() */}
                    <input 
                        type="text" 
                        name="userListName"
                        value={this.state.userListName} 
                        onChange={this.handleChange} 
                        id="user-list-name" 
                        placeholder="Name your List" />

                    <input 
                        type="text" 
                        name="userListZipcode"
                        value={this.state.userListZipcode}
                        onChange={this.handleChange}
                        id="user-list-zip" 
                        placeholder="Enter zip" />

                    <input 
                        type="text" 
                        name="userListDate"
                        value={this.state.userListDate}
                        onChange={this.handleChange}
                        id="user-list-date" 
                        placeholder="Date" />

                    <button 
                        id="button-new-list" 
                        onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
};

export default NewList;