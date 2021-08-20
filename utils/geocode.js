const request = require('request');

//geocode find an address from  geocode service and then execute callback as callback(error, data)
const geocode = (address, callback) => {
	const apiKey = process.env.API_KEY; // .env is already loaded from the main application
	const maxResults = 5; //maximum return search results in the array

	const geocodeService = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(address)}&limit=${maxResults}&appid=${apiKey}`;

	request({ url: geocodeService, json: true }, (err, response) => {
		//Network error
		if (err) {
			//callback(error,data)
			callback('Unable to connect to geocode service!', undefined);
		}
		//No result
		else if (response.body.length === 0) {
			callback('Unable to find that location. Try another search.', undefined);
		}
		//Request error
		else if (response.body.cod) {
			callback(response.body.message, undefined);
		}
		//Data returned
		else {
			callback(undefined, response.body);
		}
	});
};

module.exports = geocode;
