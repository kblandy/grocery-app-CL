import React, { Component } from 'react';
import axios from 'axios';

class WeatherBoard extends Component {

    constructor() {
        super();
        this.state = {
            loaded: false,
            weatherStats: []
        }
    };

    componentDidMount() {
        let request = axios.get('http://api.openweathermap.org/data/2.5/weather?q=Louisville&appid=e884699dae6f7aaec2bc58185be351ff');

        request.then(response => {
            const data = response.data;
            console.dir(data);
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

            let capitalizedWeather = this.state.weatherStats[0].weather.toUpperCase();
            
            return (
                <div id="weather-header">

                {capitalizedWeather} in {this.state.weatherStats[0].name} 
                
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