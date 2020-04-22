import React, { Component } from 'react';
import axios from 'axios';

class CovidStats extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            covidStats: []
        }
    };

    componentDidMount() {
        let request = axios.get('https://thevirustracker.com/free-api?global=stats');

        request.then(response => {
            const data = response.data;
            console.dir(data);
            this.setState({
                loaded: true,
                covidStats: [{
                    totalGlobalCases: data.results[0].total_cases,
                    totalDeaths: data.results[0].total_deaths,
                    totalNewCasesToday: data.results[0].total_new_cases_today,
                    totalNewDeathsToday: data.results[0].total_new_deaths_today,
                    source: data.results[0].source.url
                }]
            })
        })
            .catch(error => alert('There was an error Processing: ', error));
    }
    render() {
        if(this.state.loaded) {
            return (
                <div className="secondary-content">
                            <div className="container-covid-stats">
                                <h3 className="covid-header">{this.props.title}</h3>
                                <div className="covid-container">
                                    <span className="span-covid-global">
                                        <h4 className="covid-title">Total Global Cases: </h4>
                                        <h4 className="covid-stat">{this.state.covidStats[0].totalGlobalCases}</h4>
                                    </span>
                                </div>
                                <div className="covid-container">
                                    <span className="span-covid-global">
                                        <h4 className="covid-title">Total Global Deaths: </h4>
                                        <h4 className="covid-stat">{this.state.covidStats[0].totalDeaths}</h4>
                                    </span>
                                </div>
                                <div className="covid-container">
                                    <span className="span-covid-deaths">
                                            <h4 className="covid-title">Total New Cases Today: </h4>
                                            <h4 className="covid-stat">{this.state.covidStats[0].totalNewCasesToday}</h4>
                                    </span>
                                </div>
                                <div className="covid-container">
                                    <span className="span-covid-deaths">
                                        <h4 className="covid-title">Total New Deaths Today: </h4>
                                        <h4 className="covid-stat">{this.state.covidStats[0].totalNewDeathsToday}</h4>
                                    </span>
                                </div>
                                <a href={this.state.covidStats[0].source} className="link-credit"><h5>Data Source supplied by VirusTracker </h5></a>
                                    
                            </div>
                            {/* /Covid-19 statistic chart */}
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
        
    }
};

export default CovidStats;