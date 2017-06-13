// app.js
//
// In-Class Lab
//
// Robert Hieger

var request = new XMLHttpRequest();

console.log('Testing XMLHttpRequest:', request);

request.onreadystatechange = function()	{

	if ( request.readyState === XMLHttpRequest.DONE )	{

		var parsedJSON = JSON.parse(request.responseText);

		// Log to console.

		console.log(parsedJSON.currently.temperature);

		var currentTemp = parsedJSON.currently.temperature + '℉';

		document.getElementById('currentTemp').innerHTML = currentTemp;

	}	// end if

};	// end request.onreadystatechange

request.open('GET', 'https://js58-proxy.herokuapp.com/forecast/8cd342271b884a9607fd534e5955d21d/32.72,-40.00');

request.send();