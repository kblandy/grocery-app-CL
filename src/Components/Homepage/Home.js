import React, { Component } from 'react';

import CovidStats from './NewspaperArticles/CovidStats';
import WeatherBoard from './WeatherBoard';
import SmallArticle from './NewspaperArticles/SmallArticle';
import BigArticle from './NewspaperArticles/BigArticle';
import Welcome from './Welcome';



class Home extends Component {
    
    render() {
            return (
                <div className="font-control">
                    <div className="mb-2">
                       <WeatherBoard />
                    </div>


                    <div className="news-container-flex">
                        <Welcome />


                        <CovidStats 
                            title="COVID-19 Stats"
                        />

                        <BigArticle />

                        <SmallArticle />


                    </div>  
                </div>
                    
            );
    }
};

export default Home;




