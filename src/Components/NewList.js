import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewList extends Component {

    constructor(props) {
        super(props);

        this.state = {

            userList:
            {
                userListName: '',
                userListZipcode: '',
                userListDate: ''
            },

            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        console.log("NewList Mounted!");
    };

    //remove NewList component
    componentWillUnmount() {
        // let newListForm = document.getElementById('create-new-list-form');
        // newListForm.remove(newListForm);
        console.log("Newlist Unmounted!");
    };

    //target is the input field, selected by input attribute 'name'
    handleChange = ({ target }) => {
        this.setState((prevState) => ({
            userList: {
                ...prevState.userList,
                [target.name]: target.value
            }
        }));

        //stores values to localStorage
        localStorage.setItem(target.name, target.value);
        

    };


    handleSubmit(event) {
        event.preventDefault();
        //sets submitted to false
        //when this is set to false, call a clearForm() method to remove from Dom
        this.setState({
            submitted: true
        });

        this.createNewList();
    };

    // handleCreateNewList = () => {
    //     console.log('new list created!');

    //         return (
    //             //groceryList should have props from userinput state!
    //             <GroceryList 
    //                 // title={this.state.userListName}
    //                 // location={this.state.userListZipcode}
    //                 // date={this.state.userListName}
    //             />
    //         );
    //     };

    createNewList() {
        if (this.state.submitted) {
            console.log("Incorrectly Unmounted");
        };
    };

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit} className="container-new-list" id="create-new-list-form">
                <h2>{this.props.title}</h2>
                <h4>{this.props.subtitle}</h4>
                {/* input attribute 'name' is called as target in handleChange() */}
                    <input 
                        type="text" 
                        name="userListName"
                        value={this.state.userList.userListName} 
                        onChange={this.handleChange} 
                        id="user-list-name" 
                        placeholder="Name your List" />

                    <input 
                        type="text" 
                        name="userListZipcode"
                        value={this.state.userList.userListZipcode}
                        onChange={this.handleChange}
                        id="user-list-zip" 
                        placeholder="Enter zip" />

                    <input 
                        type="text" 
                        name="userListDate"
                        value={this.state.userList.userListDate}
                        onChange={this.handleChange}
                        id="user-list-date" 
                        placeholder="Date" />

                    <button
                        onChange={this.handleSubmit}><Link to="/mylists"><h4>Submit</h4></Link></button>

                        
                </form>
            </div>
        );
    }
};



// var data_on_LS = localStorage.getItem('userListName', 'userListZipcode', 'userListDate');

// userData.push(data_on_LS);

export default NewList;