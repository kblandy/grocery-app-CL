import React, { Component } from 'react';
import SearchListItem from './SearchListItem';

class SearchList extends Component {
    render() {
        return(
            <ul>
                <SearchListItem
                    id="id"
                    name="name"
                    image="image"
                    key="key"
                />
                <button>Add!</button>
            </ul>
        );
    }
};
    
export default SearchList;