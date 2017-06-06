// app.js

var onClick = function()  {

	// $('#box button').click(function()	{

	// 	$('#box button').text('My New Text');

	// });

	$('#box button').click(function()  {

		$('body').css('background-color', 'purple');

	});

	$('#box button').dblclick(function()  {

		$('body').css('background-color', 'orange');

	});

};

onClick();