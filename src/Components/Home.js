import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div className="main-page">
                <h2>
                WELCOME TO THIS SHOPPING APP FELLOW HUMANS.
                </h2>
                <p>
                Caila tasar fum et. Sa quí anna ettelen, ya avá raica queni, et quí latin nénar orpano.Inqua indómë nar nú, lá fëa yalúmëa tanwëataquë. Yarra lingwë yernacolla ara oi. Norcé caila linwelë silninquita, oi roina tengwo yén. Soron nirya hahta ta axa, lár orvamittanya caimasan sá, nulda nimba ana et. Arca sanga tanwëataquë sí rip
                </p>
                <h4>
                To create a new list, click the button below!
                </h4>
                <button><Link to="/newList" >New List</Link></button>
          </div>
        );
    }
};

export default Home;




