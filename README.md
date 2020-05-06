# DoublePlus Shopping List

## Project Summary

This is a simple application that shows Louisville's weather description and COVID-19 Pandemic statistics on the front page.  The main functionality comes from the grocery list where users can search the Edamam Food Database and add/delete items from their personalized list.  The entire application is designed with a tongue-in-cheek 1984 propaganda newspaper stylization.

## Technical summary

This is a React/JavaScript application that utilizes [Bootstrap](https://getbootstrap.com/docs/4.4/layout/overview/) and [Font Awesome](https://fontawesome.com/).  The three API endpoints used are [Edamam Food and Grocery Database](https://developer.edamam.com/food-database-api), [OpenWeather](https://openweathermap.org/), and [Coronavirus Tracker](https://thevirustracker.com/).

## Features

- Search the Edamam Food and Grocery Database and add chosen items to a personalized list.  Items can also be deleted from the list.

- View daily COVID-19 data:  All daily global cases and daily deaths. 

- View Louisville's short weather description that changes depending on said weather.

## Milestones

- Create Front end components/framework for backend data utilization using primarily React and Bootstrap (week 1-2)

- Fetch data from APIs and ensure that it is being rendered properly in the correct components (WeatherBoard, CovidStats, and AddItemForm) (week 3-4+; a bulk of my time will be spent here)

- Manage user experience by cleaning up front end and adding Design Elements (week?+)

## Requirements to run the project:

1. npm install and run React application:
    > npm install

2. BrowserRouter and Route: 
    > npm install --save react-router-dom

3. Bootstrap: 
    > npm install bootstrap

4. jQuery (Bootstrap will NOT run properly without jQuery):
    > npm install jquery 

5. FortAwesome/ReactFontAwesome: 
    > npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-light-svg-icons @fortawesome/free-brands-svg-icons

## Implementing APIS

1. [Edamam Food and Grocery Database](https://developer.edamam.com/food-database-api) => (api key and id required)
    1. Sign Up for the Free Developer API key/id
        - In Components -> GroceryList.js -> AddItemForm.js
        - replace API_KEY and APP_ID with your own 

2. [Coronavirus Tracker](https://thevirustracker.com/) => (no api key required!)

3. OpenWeather => (api key required)
    1. Sign Up for your free key
        - In Homepage -> WeatherBoard.js
        - replace APP_ID with the one that is sent to you

- note, for the purposes of this assignment and an outdated browser, I have left my API_KEYs and APP_IDs in the assignment which will work, but is poor practice.
