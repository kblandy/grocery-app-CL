My Project Plan Name
Grocery Store Shopping Application (better name pending!)

Project Summary
Allows user to search for items to add to a shopping list, delete and add items, check if a Kroger location has those items, and has an option to sort the items into categories by aisle based on user’s preferred Kroger location for ease of shopping.

Technical summary
Languages: React, Javascript Other: Bootstrap, jQuery APIs: Kroger Product API (https://developer.kroger.com/reference/#tag/Products), Kroger Location API (https://developer.kroger.com/reference/#tag/Locations), Kroger Product Search API (https://developer.kroger.com/documentation/consume/best-practices/product-search)

Features
• Search bar to search for item availability based on user’s Kroger location preference, and can then add those items to the shopping list

• Create (and save, time allowing) a shopping list, add and remove items from the list

• Buttons(?) that will organize items by aisle based on store location and alphabetically

o Nice to have -> users can change the order that the aisle categories are in

o Nice to have -> users can save lists, items that are no longer in store can have a tag/badge indication such (savedList {} object holding the attributes of each list???)

Milestones
Create Front end components/framework for backend data utilization using primarily React and Bootstrap (week 1-2)

Fetch data from APIs and ensure that it is being rendered properly in the correct components (search bar, location, list item addons, aisle organization, etc.) (week 3-4+; a bulk of my time will be spent here)

Manage user experience by cleaning up front end and making it look simple, modern, and beautiful (make it work first, then make it beautiful!) (week?+)

Requirements to run the project:

npm install and run React application

BrowserRouter and Route: npm install --save react-router-dom

APIS used:

Edamam food database => (api key and id required)
Coronavirus Data API (thevirustracker.com) => (no api key required!)
OpenWeather => (api key required)