// app.js

$(document).ready(function()  {

	var loading = $('#loading-marquee');
	loading.hide();

	// Select button#get-weather and attach click
	// event handler.

	$('#get-weather').on('click', function(event)  {

		loading.show();

		// Prevent #get-weather default behavior.

		event.preventDefault();

		console.log('Work?');

		// Get the value of longitude from input#longitude.

		var long = $('#longitude').val();

		// Get the value of latitude from input#latitude.

		var lat = $('#latitude').val();

		console.log(long, lat);

		// Our URL format:

		// https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/long,lat

		var baseURL = 'https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43';

		var weatherURL = baseURL + '/' + long + ',' + lat;

		console.log(weatherURL);

		$.get(weatherURL, function(response) {

			console.log(response);

			var currentTemp = response.currently.temperature;

			$('#current-temp').html(currentTemp);

			var humidity = response.currently.humidity;

			$('#humidity').html(humidity * 100 + '%');

			var currentWind = response.currently.windSpeed;

			$('#current-wind').html(currentWind);

		});

	});	// end $('#get-weather')

});	// end $(document).ready()