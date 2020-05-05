import React, { Component } from 'react';

import CovidStats from './NewspaperArticles/CovidStats';
import WeatherBoard from './WeatherBoard';
import BigArticle from './NewspaperArticles/BigArticle';
import Welcome from './Welcome';



class Home extends Component {
    
    render() {
            return (
                <div className="font-control">
                    <div className="mb-2">
                       <WeatherBoard />
                    </div>


                    <div className="welcome-flex">
                        <Welcome />
                        <CovidStats 
                            title="COVID-19 Stats"
                            subtitle="exercise your right to doublethink"
                        />

                    </div>
                    <div className="news-container-flex">

                        <BigArticle />




                    </div>  
                </div>
                    
            );
    }
};

export default Home;




