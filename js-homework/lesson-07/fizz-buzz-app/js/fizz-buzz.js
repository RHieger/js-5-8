// fizz-buzz.js
//
// Robert Hieger

// 1: Create event for after DOM loads.

window.onload = function()	{

	// 2: Get button element to which onclick event will be attached.

	var btn = document.getElementById('goFizzBuzz');

	// 3: Attach onclick event to btn.

	btn.onclick = function(event)	{

		// 4: Prevent default behavior of onclick.

		event.preventDefault();

		// 5: Get user input contained within input #number.

		var userInput = parseInt(document.getElementById('number').value);

		// 6: Get #runHeading.

		var runHeading = document.getElementById('runHeading');

		// 7: Append number of FizzBuzz cycles to #runHeading

		runHeading.innerHTML += ' ' + userInput + ' Times&hellip;';

		// 8: Reveal runHeading.

		runHeading.style.visibility = 'visible';

		// 9: Clear input #number after button click.

		document.getElementById('number').value = '';

		// 10: Get p element #runNumbers.

		var parFizzBuzz = document.getElementById('runNumbers');

		// 11: Loop through and display appropriate content within parFizzBuzz.

		for (var i = 0; i < userInput; i++)	{

			switch(true)	{

				case (i % 3 === 0 && i % 5 === 0):
					parFizzBuzz.innerHTML += 'FizzBuzz<br />';
					break;

				case (i % 3 === 0):
					parFizzBuzz.innerHTML += 'Fizz<br />';
					break;

				case (i % 5 === 0):
					parFizzBuzz.innerHTML += 'Buzz<br />';
					break;

				default:
					parFizzBuzz.innerHTML += i + '<br />';
					break;

			}	// end switch(true)

		}	// end for

		// 12: Append 'Done.' Message to parFizzBuzz.

		parFizzBuzz.innerHTML += 'Done.';

	};	// end btn.onclick

};	// end window.onload
