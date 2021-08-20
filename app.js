//udemy su dung darksky api, con minh su dung openweather api cho current weather
require('dotenv').config();
const request = require('request');
const geocode = require('./utils/geocode.js');

const apiKey = process.env.API_KEY; // Api key for openweathermap.org

const lon = 106.666672; //longitude and latitude for Ho Chi Minh
const lat = 10.75;
const units = 'metric'; // standard for Kelvin..., metric for Celcius,.. imperial for Ferenheit
const lang = 'en'; // language en or vi or others

const citySearch = 'ho chi minh';

const weatherUrl = `http://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&units=${units}&appid=${apiKey}&lang=${lang}`;
//const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(citySearch)}&limit=5&appid=${apiKey}`;

// request(
// 	{
// 		url: 'http://api.openweathermap.org/data/2.5/onecall?lon=&lat=&units=metric&appid=${apiKey}',
// 		json: true,
// 	},
// 	(error, response) => {
// 		if (error) {
// 			console.error("Unable to connect to weather service!"));
// 		} else if (response.body.cod) {
// 			console.log('Response with error:', response.body.message);
// 		} else {
// 			const weather = response.body;
// 			const currentTemp = weather.current.temp;
// 			const precipProp = weather.hourly[0].pop * 100;
// 			let weatherStat = weather.current.weather[0].description;
// 			weatherStat = weatherStat[0].toUpperCase() + weatherStat.slice(1); //Upper case the first letter

// 			console.log(
// 				weatherStat,
// 				`.It is currently ${currentTemp} degree out in Ho Chi Minh city. There is ${precipProp}% chance of rain in the next 1 hour`
// 			);
// 		}
// 	}
// );

geocode('Boston', (err, data) => {
	console.log('Error: ', err);
	console.log('Data: ', data);
});
