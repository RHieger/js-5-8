// fizz-buzz.js
//
// Robert Hieger

// 1: Create event for after DOM loads.

window.onload = function()	{

	// 2: Get button element to which onclick event will be attached.

	var btn = document.getElementById('goFizzBuzz');

	console.log(btn);	// For debugging only.

	// 3: Attach onclick event to btn.

	btn.onclick = function(event)	{

		// 4: Prevent default behavior of onclick.

		event.preventDefault();

		// 5: Reveal runHeading.

		var runHeading = document.getElementById('runHeading');

		console.log(runHeading);	// For debugging only.

		runHeading.style.visibility = 'visible';

		// 6: Get user input contained within input #number.

		var userInput = parseInt(document.getElementById('number').value);

		console.log(userInput);	// For debugging only.

		// 7: Get p element #runNumbers.

		var parFizzBuzz = document.getElementById('runNumbers');

		console.log(parFizzBuzz);	// For debugging only.

	};	// end btn.onclick

};	// end window.onload
