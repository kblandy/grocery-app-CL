import React, { Component } from 'react';

class Item extends Component {
    render() {

        return(
            <div className="container">
                <ul className="d-inline-flex">
                    <li>
                        <h6 className="h6-item">{this.props.name}</h6>
                    </li>

                    <li>
                        <img src={this.props.image} alt={this.props.name}/>
                    </li>

                    <li>
                        <button className="button-x" onClick={ () => this.props.removeItem(this.props.id) }> x </button>
                    </li>
                </ul>
            </div>
        );
    }
};

export default Item;
