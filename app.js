// udemy su dung darksky api, con minh su dung openweather api cho current weather
// Usage: node ./app.js searchingLocation

require('dotenv').config();
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const location = process.argv[2];

if (!location) {
	return console.log('Please provide a location name as the first argument');
}

geocode(location, (error, geoData) => {
	if (error) {
		return console.log('Error: ', error);
	} else {
		forecast(geoData[0].lon, geoData[0].lat, (error, forecastData) => {
			if (error) {
				return console.log('Error: ', error);
			} else {
				return console.log('Data: ', forecastData);
			}
		});
	}
});
