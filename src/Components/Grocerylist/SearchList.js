import React, { Component } from 'react';

class SearchList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            addItem: false,
            searchCleared: false
        }

        
    }

    componentDidMount() {
        this.setState({
            loaded: true
        })
    }
            
    handleClick(name, image) {
        this.props.addItem(name, image);

        this.setState({
            addItem: true
        })
    };

    //sets the clearButton state to false so that program can cycle through again
    handleClearSearch() {

        this.setState({
            searchCleared: true
        })

    };
    

    render() {

        var { loaded } = this.state;

        if(loaded) {

                return (

                    <div className="container-sm">
    
                    {/* loops through api requested item and displays its name and image */}
                        {this.props.searchItems.map((searchItem, index) =>

                        <div key={index}>
                            <div>
                                <h4>{searchItem.itemName}</h4>
                                <img src={searchItem.itemImage} alt="" />
                            </div>

                            <div className="flex-div-column">
                                <div key={index}>
                                    <button onClick={() => {this.handleClick(searchItem.itemName, searchItem.itemImage)}} className="add-button">Add item!</button>
                                </div>
                            </div>
                        </div>      
                            
                        )}
                    </div>
                );   
            } else {
                return (
                    <div>Loading...</div>
                )
            }
            
        };
        
    }


    
export default SearchList;
