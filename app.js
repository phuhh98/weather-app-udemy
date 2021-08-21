//udemy su dung darksky api, con minh su dung openweather api cho current weather
require('dotenv').config();
const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

geocode('Boston', (err, data) => {
	console.log('Error: ', err);
	console.log('Data: ', data);
});

forecast(-75.7088, 44.1545, (error, data) => {
	console.log('Error', error);
	console.log('Data', data);
});
