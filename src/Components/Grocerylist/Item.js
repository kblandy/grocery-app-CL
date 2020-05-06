import React, { Component } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Item extends Component {
    render() {

        return(
            <div className="item-inner-container">

                <ul className="d-inline-flex" id="item-ul">
                    <li className="pr-2">
                        <img id="item-image" src={this.props.image} alt={this.props.name}/>
                    </li>

                    <li className="pr-2 justify-content-center align-self-center">
                        <h6 className="h6-item">{this.props.name}</h6>
                    </li>

                    <li className="pr-2 justify-content-center align-self-center">
                    {/* FontAwesome Trash icon so users can delete item from list */}
                    <FontAwesomeIcon 
                        icon={faTrashAlt} 
                        onClick={ () => this.props.removeItem(this.props.id) }   
                        title="Click to delete item" 
                        onMouseEnter={this.title}
                    />
                    </li>

                </ul>
            </div>
        );
    }
};

export default Item;
