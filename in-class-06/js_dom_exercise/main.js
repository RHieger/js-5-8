// main.js

/* DOM Manipulation: Independent Practice

******FIRST******
First, read this page about something we didn't cover, prompts!
http://www.w3schools.com/jsref/met_win_prompt.asp
*****************

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, display the prompt asking
  what their favorite things are.

  NOTE: Instructor decided against use of the prompt when demonstrating this
  DOM exercise in class. I quite agree it makes more sense without it.

- When they hit enter, take the value they've typed in and add it to the list
  (remember: appendChild)

Bonus:

What they type in is blank, alert the user "you must type in a value!" if they
press enter without adding the empty value to the page.
*/

window.onload = function()	{

	// When someone clicks on the button...

	// 1: Get the button element to which the eent will be attached.

	var button = document.getElementById('new-thing-button');

	// 2: Attach event to button.

	button.onclick = function(event)	{

		// 3: Prevent default submit behavior associated with button.

		event.preventDefault();

		// 4: Extract the value of element #new-thing.

		var newItem = document.getElementById('new-thing').value;

		// 5: Create text node with value in new Item.

		var newItemText = document.createTextNode(newItem);

		// 6: Create new <li> element.

		var newListItem = document.createElement('li');

		// 7: Get the unordered list #fav-things.

		var uList = document.getElementById('fav-list');

		// 8: Append newListItem to uList.

		uList.appendChild(newListItem);

		// 9: Append newItemText to newListItem.

		newListItem.appendChild(newItemText);

		// 10: Clear <input id="new-thing">.

		document.getElementById('new-thing').value = '';

	};

};