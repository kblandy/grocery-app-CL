import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CovidStats from './CovidStats';
import WeatherBoard from './WeatherBoard';


class Home extends Component {
    
    render() {
            return (
                <div className="div-fix-collapse">
                    <WeatherBoard />
                    <h3 >{this.props.title}</h3>

                    <div>
                        <div>
                            <p className="container-sm mx-auto">
                            Welcome!  This project utilizes React JS to add items from the Edamam Food Database into a User List.  On this page you can also note the Weather (default Louisville, KY) and check on the current stats of today's COVID-19 Pandemic, that began shortly after starting this project.
                            </p>
                            <h5>
                            To create a new list, click <span className="button-create-list"><Link to="/newList" >Here</Link></span>  
                            </h5>
                            
                        </div>
                    </div>
                    {/* CovidStats Component */}
                    <div>
                        <CovidStats 
                                title="COVID-19 Stats"
                            />
                    </div>
                        
                </div>       
            )
    }
};

export default Home;




