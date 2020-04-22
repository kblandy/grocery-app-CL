import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CovidStats from './CovidStats';
import WeatherBoard from './WeatherBoard';

class Home extends Component {
    
    render() {
            return (
                <div className="main-page">
                    <WeatherBoard />
                    <h3>{this.props.title}</h3>

                    <div className="secondary-content">
                        <div>
                            <p>
                            Mind your own goddamn business, Gene! I'm having a conversation with my mother here! Kissing Rick's ass isn't gonna make him stay, Mom, but it will help you lose everyone else. It's fine, everythings is fine. theres an infinite number of realities Morty, and in a few--
                            </p>
                            <h4>
                            To create a new list, click the button below!
                            </h4>
                            <button><Link to="/newList" >New List</Link></button>
                        </div>
                    </div>
                    {/* CovidStats Component */}
                    <div className="container-item">
                        <CovidStats 
                                title="Covid-19 Stats"
                            />
                    </div>
                        
                </div>       
            )
    }
};

export default Home;




