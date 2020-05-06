import React, { Component } from 'react';
import axios from 'axios';

import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const APP_ID = 'e884699dae6f7aaec2bc58185be351ff'

class WeatherBoard extends Component {

    constructor() {
        super();
        this.state = {
            loaded: false,
            weatherStats: []
        }
    };
    // OpenWeather API Call
    componentDidMount() {
        let request = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Louisville&appid=${APP_ID}`);

        request.then(response => {
            const data = response.data;
            this.setState({
                loaded: true,
                weatherStats: [{
                    name: data.name,
                    weather: data.weather[0].description
                }]
            })
        })
            .catch(error => alert('There was an error Processing: ', error));
    }

    render(){


        if(this.state.loaded) {
            
            return (
                <div id="weather-header">
                    <span className="p-3">
                        <FontAwesomeIcon 
                            icon={faLongArrowAltRight}
                        />
                    </span>
                        {this.state.weatherStats[0].weather} in {this.state.weatherStats[0].name}  
                    <span className="p-3">
                        <FontAwesomeIcon 
                            icon={faLongArrowAltLeft}
                        />
                    </span>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
};

export default WeatherBoard;