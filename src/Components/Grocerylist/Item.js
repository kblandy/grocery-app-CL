import React, { Component } from 'react';

class Item extends Component {
    render() {

        return(
            <div className="item-inner-container">
                <ul className="d-inline-flex" id="item-ul">
                <li>
                        <button className="button-x" onClick={ () => this.props.removeItem(this.props.id) }> x </button>
                    </li>
                    <li>
                        <img src={this.props.image} alt={this.props.name}/>
                    </li>

                    <li>
                        <h6 className="h6-item">{this.props.name}</h6>
                    </li>

                </ul>
            </div>
        );
    }
};

export default Item;
