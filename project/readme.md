# Travel Blog

## Objective
The goal for this project is to build a Travel Blog with HTML, CSS, and JS.

## Features
### Homepage
#### A list of travel locations (exemplified on the left)
- Build a list of locations you travelled to
	- The list can display information from an array of objects
	- The array can be read from Localstorage
- The following information should be shown in the list:
	- The name of the city and country
	- The date of the visit (when you arrived)
	- A thumbnail of the city
#### The detail of the city (exemplified on the right)
* When an element on the left is clicked the detail should update with:
	- An image of the city
	- City and Country name
	* The date of the visit (from and to)
	* A description of the travel (can be Lipsum)
	* The current weather in the city 
#### How to show the current weather of the travel location
* You can fetch the current weather (including an icon) of the travel location using the [OpenWeatherMap API](https://openweathermap.org/api)
* Show it as part of the information of your travel location

### Add new location page
- A form to add new locations to an array in Localstorage
- After adding the city, it should appear in the homepage with the other travel locations
- You can experiment with the various input elements, e.g. `<input type="date" />` or `<textarea>`
- You can add a images: Uploading images is out of context for this project, but you can add the URL to an online image and save it to Localstorage same as any other field

### The Traveler page
- A static page to showcase the author of the blog
- Be as creative as you want :)

## Bonus tasks
### Image Gallery
* Add several images to each city and display them in a Javascript library in the detail section of the homepage

### Delete Location
* Add the ability to delete locations from the Localstorage array

### Forecast
* Add the forecast for the next few days in the detail section of a city

### Map
- So far, we have not played around with embedding a Google Map. If you want to, feel free to play around with the [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) and how to integrate it in your app. You could then show the travel location on a map for every travel location.
* Feel free to user other Map APIs instead of Google Maps, e.g. MapBox
* You can also show a special Map with all travel locations

## Considerations
* The mockups provided are for example only, feel free to design/structure your site as you see fit;
* Have responsiveness in mind, do your best to make your website look good in both Desktop and Mobile browsers;
- When starting to implement, focus on creating the HTML and CSS first, JS becomes much simpler when you already have an UI to code for;
- Your CSS should be a in a separate .css file and linked to the HTML pages with the `link` tag;
- Your JS should also be in a separate .js file and linked to the HTML pages with the `script` tag;
- Style your website at will, feel free to use a CSS framework like Tailwind, Bulma or Bootstrap;
- You can ask the teacher for support at any time

## Submission
Submission deadline is on the `11th of January`
To submit the project, send us an email with the following information:
- Project:
	* Link to your project’s Github repository or Code Sandbox
- If you did any bonus tasks, list them
- Send it to Jan and Helder
