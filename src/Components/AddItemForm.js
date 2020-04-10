import React, { Component } from 'react';

class AddItemForm extends Component {
    
    userInput = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.userInput} placeholder="Type an Item" />
                    <button onClick={ () => this.props.addItem(this.props.name)}>Add an Item</button>
                    <button onClick={(localStorage.clear())}>Clear Data</button>
                </form>
            </div>
        );
    }

};

export default AddItemForm;