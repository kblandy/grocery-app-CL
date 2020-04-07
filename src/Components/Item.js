import React, { Component } from 'react';

class Item extends Component {
    render() {

        return(
            <div className="container">
                <ul className="container-item">
                {this.props.name}{this.props.id}
                    {/* <li><h3>{this.props.id}</h3></li>
                    <li><h3>{this.props.name}</h3></li>
                    <li><h3>{this.props.price}</h3></li> */}
                    <button onClick={ () => this.props.removeItem(this.props.id) }> x </button>
                </ul>
            </div>
        );
    }
};

export default Item;

//note, not recognizing id or removeItem in button onClick function