/*

Appending: Independent Practice

Make the delete and complete links do the following when clicked:

* When "Complete" is clicked, make the text for the item have a strikethrough decoration
* When "Delete" is clicked, remove the entire LI parent
* When adding an item via the input and submit button, add it to the UL list.
* Any newly added items must have the same delete and complete functionality as the previous ones
*/

$(document).ready(function()  {

	// Select and save to variable <ul> list #fav-list:

	$favList = $('#fav-list');

	// Event for Task Completion:

	$favList.on('click', 'li a.complete', Complete);

	// Complete() Function:

	function Complete()	{

		var $span = $(this).parent().find('span');

		$span.css('text-decoration', 'line-through');
		$span.css('color', '#ff0000');

	}	// end Complete()

	// Event for List Item Deletion:

	$favList.on('click', 'li a.delete', Delete);

	function Delete() {

		$(this).parent().remove();

	}	// end Delete()

});