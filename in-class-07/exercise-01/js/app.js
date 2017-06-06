// app.js

var onLoad = function()	{

	$('div.container');

	var counter = 0;

	var text;

	$('a').click(function(event)	{

		counter++;

		event.preventDefault();

		if (counter % 2 === 0)	{

			

		}	else  {



		}	// end if-else

		$(this).text('You clicked me ' + counter + ' times');

	});

};

onLoad();