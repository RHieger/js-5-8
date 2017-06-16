// app.js

var launch = function() {

	console.log('Launched!');

};

var launchTwo = function()	{

	console.log('Launched a different rocket!');

}	// end launchTwo()

// rocketLaunch(LaunchFn) is a higher order function
// because we pass in a function.

function rocketLaunch(launchFn)	{

	console.log('T minus 10...')

	for (var i = 9; i >= 0; i--)	{

		console.log(i + '...');

	}

	launchFn();

}	// end rocketLaunch(LaunchFn)

rocketLaunch(launch);

rocketLaunch(launchTwo);

// setTimeout(function()	{

// 	rocketLaunch(launch);

// }, 5000);

setInterval(function()	{

	rocketLaunch(launch);

}, 1000);

