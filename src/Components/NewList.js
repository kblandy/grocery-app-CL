import React, { Component } from 'react';

class NewList extends Component {

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

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
        console.log(target.name)
    };

    handleSubmit(event) {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <form className="container-new-list">
                <h2>{this.props.title}</h2>
                <h4>{this.props.subtitle}</h4>
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

                    <button id="button-new-list" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
};

export default NewList;