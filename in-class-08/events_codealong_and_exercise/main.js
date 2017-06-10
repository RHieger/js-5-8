/*

Appending: Independent Practice

Make the delete and complete links do the following when clicked:

* When "Complete" is clicked, make the text for the item have a strikethrough decoration
* When "Delete" is clicked, remove the entire LI parent
* When adding an item via the input and submit button, add it to the UL list.
* Any newly added items must have the same delete and complete functionality as the previous ones
*/

$(document).ready(function() {

	var $favList = $('#fav-list');

	$favList.on('click', 'li a.complete', function()  {

		$(this).parent().find('span').css('text-decoration', 'line-through');

	});	// end $favList.on()

	$favList.on('click', 'li a.delete', function()	{

		$(this).parent().remove();

	});

	var $newThingButton = $('#new-thing-button');

	$newThingButton.on('click', function()  {

		var $userInput = $('#new-thing').val();

		$newItem = '<li><span>' + $userInput +  '</span> ' +
			'<a class="complete" href="#">Complete</a> ' + 
			'<a class="delete" href="#">Delete</a></li>';

		$($newItem).appendTo($favList);

		$(this).val('');

	});

});