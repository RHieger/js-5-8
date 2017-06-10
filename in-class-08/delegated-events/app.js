// app.js

$(function()	{

	var $favList = $('#fav-list');

	$favList.on('mouseenter', 'li', function(e)  {

		console.log(e.pageX, e.pageY);

		$(this).addClass('hover');

	});

	var $elem = $('<li><a href="#">Hurfdurf</a>');

	$favList.append($elem);

	$favList.on('click', 'li a', function(e)  {

		console.log(e.pageX, e.pageY);

		$(this).removeClass('hover');
		$(this).parent().remove();

	});

})