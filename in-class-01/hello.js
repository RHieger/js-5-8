// Working with conditionals and strings.

var chicken = 'Hello, ';

console.log(chicken + 'Bobby!');
console.log(chicken + 'James!');

var	age = 65;

if (age >= 21) {

	console.log('You may legally have a drink.');

	if (age < 25)	{ console.log('You probably want Yaeger.'); }	// end if

	if (age >= 25 && age < 60)	{ console.log('You want an old fashioned.'); }	// end if

	if (age > 60)	{ console.log('You want the drink brandy.'); }	// end if

}	// end if

// Working with Loops.

var counter = 1;

while (counter < 10)	{

	console.log('Woohoo! ' + counter);

	if (counter % 3 == 0)	{

		console.log('pro tip');

		break;

	}	// end if

	counter++;

}	// end while
