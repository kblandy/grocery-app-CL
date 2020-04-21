import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    
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
                    totalNewDeathsToday: data.results[0].total_new_deaths_today
                }]
            })
        })
            .catch(error => alert('There was an error Processing: ', error));
    }

    render() {
        if(this.state.loaded) {
            return (
                <div className="main-page">
                    <h2>{this.props.title}</h2>
    
                    {/* Covid-19 statistic chart */}
                    <div id="covid19-stats">
                    <h3>{this.props.covidHeader}</h3>
                        <h4>Total Global Cases: {this.state.covidStats[0].totalGlobalCases}</h4>
                        <h4>Total Global Deaths: {this.state.covidStats[0].totalDeaths}</h4>
                        <h4>Total New Cases Today: {this.state.covidStats[0].totalNewCasesToday}</h4>
                        <h4>Total New Deaths Today: {this.state.covidStats[0].totalNewDeathsToday}</h4>

                    </div>
    
                    <p>
                    Caila tasar fum et. Sa quí anna ettelen, ya avá raica queni, et quí latin nénar orpano.Inqua indómë nar nú, lá fëa yalúmëa tanwëataquë. Yarra lingwë yernacolla ara oi. Norcé caila linwelë silninquita, oi roina tengwo yén. Soron nirya hahta ta axa, lár orvamittanya caimasan sá, nulda nimba ana et. Arca sanga tanwëataquë sí rip
                    </p>
                    <h4>
                    To create a new list, click the button below!
                    </h4>
                    <button><Link to="/newList" >New List</Link></button>
              </div>
            );
        } else {
            return (
                <div className="main-page">
                    <h2>{this.props.title}</h2>
                    <div><h4>Loading COVID-19 data...</h4></div>

                    <p>
                    Caila tasar fum et. Sa quí anna ettelen, ya avá raica queni, et quí latin nénar orpano.Inqua indómë nar nú, lá fëa yalúmëa tanwëataquë. Yarra lingwë yernacolla ara oi. Norcé caila linwelë silninquita, oi roina tengwo yén. Soron nirya hahta ta axa, lár orvamittanya caimasan sá, nulda nimba ana et. Arca sanga tanwëataquë sí rip
                    </p>
                    <h4>
                    To create a new list, click the button below!
                    </h4>
                    <button><Link to="/newList" >New List</Link></button>
                </div>
            )
            

        }

        
    }

        
};

export default Home;




