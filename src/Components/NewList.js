import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewList extends Component {

    constructor(props) {
        super(props);

        this.state = {

            userList:
            {
                userListName: '',
                userListDate: ''
            },

            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    };

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit} className="container-new-list" id="create-new-list-form">
                <h2 className="header-title">{this.props.title}</h2>
                {/* input attribute 'name' is called as target in handleChange() */}
                    <div className="form-container">
                    <p className="new-list-sub">{this.props.subtitle}</p>
                        <input 
                            type="text" 
                            name="userListName"
                            value={this.state.userList.userListName} 
                            onChange={this.handleChange} 
                            id="user-list-name" 
                            placeholder="List Name" />

                        <input 
                            type="text" 
                            name="userListDate"
                            value={this.state.userList.userListDate}
                            onChange={this.handleChange}
                            id="user-list-date" 
                            placeholder="Date" />

                        <div className="submit-container">
                        <img src={require('../Images/stamp.jpg')} alt="victory stamp" className="img-stamp" />
                        <button className="button-submit"
                            //route, onclick will reroute to mylists tab
                            onChange={this.handleSubmit}><Link to="/mylists" className="submit-link">Submit</Link>
                        </button>
                        </div>

                    </div>
                
                </form>
            </div>
        );
    }
};

export default NewList;