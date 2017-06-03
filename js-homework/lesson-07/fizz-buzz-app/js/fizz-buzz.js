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

		document.getElementById('number').value = '';

		// 7: Get p element #runNumbers.

		var parFizzBuzz = document.getElementById('runNumbers');

		console.log(parFizzBuzz);	// For debugging only.

		// 8: Create text node for p #runNumbers content.

		var fizzBuzzContent = document.createTextNode('');

		parFizzBuzz.appendChild(fizzBuzzContent);

		// 9: Loop through and display appropriate content within parFizzBuzz.

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

		parFizzBuzz.innerHTML += 'Done.';

	};	// end btn.onclick

};	// end window.onload
