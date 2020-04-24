import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (


            <div id="welcome-div">
                <div>
                    <p className="container-sm mx-auto">
                    Welcome.  This project utilizes React JS to add items from the Edamam Food Database into a User List.  On this page you can also note the Weather (default Louisville, KY) and check on the current stats of today's COVID-19 Pandemic, that began shortly after starting this project.
                    </p>
                    <h5 className="button-create-list mb-3"><Link to="/newList" >To create a new list, click Here</Link></h5>  
                    
                </div>
            </div>
        )
    }
};

export default Welcome;