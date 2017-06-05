// app.js

// $(function()  {
// 	var container = $('div.container');
// 	console.log(container);
// });

// More elegant:

var onLoad = function()	{

	console.log('Loaded.');

	var container = $('div.container');

	var helloText = $('<strong></strong>');

	helloText.text('This page is awesome!');

	helloText.appendTo(container);

	$('.container h1').text('My new text');

	console.log('Current Text:', $('div.container h1').text());
};

$(onLoad);