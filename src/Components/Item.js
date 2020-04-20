import React, { Component } from 'react';

class Item extends Component {
    render() {

        return(
            <div className="container">
                <ul className="container-item">
                    <li>
                    {this.props.name}
                    </li>

                    <li>
                    <img src={this.props.image} alt={this.props.name}/>
                    </li>
                    {/* <li><h3>{this.props.id}</h3></li>
                    <li><h3>{this.props.name}</h3></li>
                    <li><h3>{this.props.price}</h3></li> */}
                    <li>
                        <button onClick={ () => this.props.removeItem(this.props.id) }> x </button>
                    </li>
                </ul>
            </div>
        );
    }
};

export default Item;

// addItem button should be on items rendered from API request
{/* <button onClick={ () => this.props.addItem(this.props.name)}>Add an Item</button> */}