import React, { Component } from 'react';

class Item extends Component {
    render() {

        return(
            <div className="container">
                <ul className="d-inline-flex">
                    <li>
                        {this.props.name}
                    </li>

                    <li>
                        <img src={this.props.image} alt={this.props.name}/>
                    </li>

                    <li>
                        <button onClick={ () => this.props.removeItem(this.props.id) }> x </button>
                    </li>
                </ul>
            </div>
        );
    }
};

export default Item;
