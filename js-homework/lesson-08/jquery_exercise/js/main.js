/* Create a Checklist: Independent Practice

You'll add the ability to complete tasks in the list. Your program must complete
the following rules:

- Through jQuery add a "complete task" link at the end of each to-do item.
- When clicked, the link will cross out the current task (hint: add a class to the list
  that sets the text-decoration to strikeout).
- Each new task added by the user needs to also have the "complete task" link akt the end.
- Bonus: when user completes task, remove the task from the current list and add it to a
  completed list below. Do not show this list unless there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.

*/

$(document).ready(function()  {

	// Personalize the pages heading output.

	var yourName = prompt('What is your name?');

	// Alter span#name.

	$('#name').html(yourName);

	// Select and save to variable <ul> list #fav-list:

	$favList = $('#fav-list');

	// Event for Task Completion:

	$favList.on('click', 'li a.complete', completeItem);

	// completeItem() Handler:

	function completeItem()	{

		/*******************************************************
		 *
		 * NOTE: The original code, commented out below, has   *
		 * been refactored to remove completed items and move  *
		 * them to a new "Completed Tasks" list. This would    *
		 * therefore obviate the need for the deleteItem()     *
		 * function, i.e., this function takes care of that    *
		 * deletion at the same time as the item is moved.     *
		 *													   *
		 *******************************************************
		*/

		// var $span = $(this).parent().find('span');

		// $span.css('text-decoration', 'line-through');
		// $span.css('color', '#ff0000');

		var $itemForDeletion = $(this).parent();

		// Strip $itemForDeletion of a.complete link.

		$($itemForDeletion.find('a.complete')).remove();

		$itemForDeletion.remove();

		// console.log($itemForDeletion);

		// Reveal "Completed Tasks" Heading.

		$('#tasksDone').css('display', 'block');

		// Append Deleted Item to "Completed Tasks" List.

		$('#taskItems').append($itemForDeletion);

	}	// end completeItem()

	// Event for List Item Deletion:

	$favList.on('click', 'li a.delete', deleteItem);

	// deleteItem() Handler:

	function deleteItem() {

		$(this).parent().remove();

	}	// end deleteItem()

	// Event for Adding List Item:

	$('#new-thing-button').on('click', addItem);

	// addItem() Handler:

	function addItem(event)	{

		// Prevent default behavior for button click.

		event.preventDefault();

		// Assign user input to variable.

		var userInput = $('#new-thing').val();

		// console.log(userInput);

		// Assign value of a new list item to a variable.

		var newItem = $('<li class="fav-thing"><span>' + userInput +
						'</span> <a class="complete" href="#">Complete</a> ' +
						'<a class="delete" href="#">Delete</a>');

		// Append newItem to list.

		$favList.append(newItem);

		// Clear input field after button click.

		$('#new-thing').val('');

	}	// end addItem()

});		// end $(document).ready()
