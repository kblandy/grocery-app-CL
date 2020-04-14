import React, { Component } from 'react';

class SearchListItem extends Component {
    render() {
        return(
            <div>
                <li>
                    <h4>{this.props.image}</h4>
                    <h4>{this.props.name}</h4>
                </li>
            </div>
        )

    };
};

export default SearchListItem;