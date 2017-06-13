// app.js

var request = new XMLHttpRequest();

request.onreadystatechange = function()	{

	if (request.readyState === 4)	{

		var parsedJSON = JSON.parse(request.responseText);

		var elem = document.getElementById('body');

		elem.innerHTML = parsedJSON[0].description;

	}

};

request.open('GET', 'http://data.consumerfinance.gov/api/views.json');

request.send();