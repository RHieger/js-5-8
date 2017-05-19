// random-address.js
//
// Robert Hieger


/* Generate random addresses!
 *
 * For this I’d like you to:
 *
 * Create a new array containing dummy data for Street, City, State.
 * Now each time you run the script, it should print a new randomly generated 
 * address from the arrays and random numbers for street numbers.
 *
 * For example:
 *
 * node random-address.js
 * => 34578 Dolphin Street, Wonka NY, 44506
 *
 * As a bonus, randomly include an apartment number (so sometimes an address 
 * has an apartment while others do not).
 *
 */

 // MY SOLUTION:

 // NOTE: I am indebted to Mozilla documentation on setting a range for random
//		 number generation. I adapted my function from samples found at this
//		 article URL:

//		 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
// 			Global_Objects/Math/random

function numGenerator(min, max)	{

	var min = Math.ceil(min);		// The minimum number for street number
	var max = Math.floor(max);		// The maximum number for street number

	// Randomly generate a number between min and max, with a multiplier equal 
	// to the maximum - minimum value + 1 (with zero indexing, equal to
	// max - 1), then inclusive of the maximum value by virtue of adding the 
	// minimum number to the calculation.

	return Math.floor( Math.random() * (max - min + 1) ) + min;

}	// end numGenerator(min, max)

var addresses = [
 	' East 4th Streeet, New York, NY 10003',
	' East Michelle Street, West Covina, CA 91790', 		
	' North Bronson Avenue, Los Angeles, CA 90004',
 	' Matilija Avenue, Los Angeles, CA 91405',
 	' West 95th Street, New York, NY 10025',
 	' East 3rd Street, New York, NY 10003',
 	' East 12th Street, New York, NY 10009',
 	' East 4th Street, New York, NY 10009', 				 
 	' East 21st Street, New York, NY 10010'
];

var addressesWithAptNumbers = [
 	' East 4th Streeet #5D, New York, NY 10003',
	' East Michelle Street #12B, West Covina, CA 91790', 		
	' North Bronson Avenue #6E, Los Angeles, CA 90004',
 	' Matilija Avenue #8G, Los Angeles, CA 91405',
 	' West 95th Street #7A, New York, NY 10025',
 	' East 3rd Street #5E, New York, NY 10003',
 	' East 12th Street #9C, New York, NY 10009',
 	' East 4th Street #6D, New York, NY 10009', 				 
 	' East 21st Street #6A, New York, NY 10010'
];

// NOTE: This solution still at least partly violates DRY principles in that
//		 some data is duplicated in the second array. Nonetheless, it DOES
//		 satisfy the overall requirements for the bonus of randomly including
//		 apartment numbers, so I would call it partially successful. I would
//		 still like to devise a means of randomly including apartment numbers
//		 without data duplication, and also making the apartment numbers
//		 random, as well. The logic for this would be somewhat more complex;
//		 I will solve this one, time allowing, after completing Assignment 3.

// Generate flag for including or excluding apartment number in address.

var flag = Math.floor(numGenerator(1, 4));

// NOTE: The above range gives roughly a 50/50 chance of an apartment number being included.

// Print header to console:

console.log('\nRANDOMLY-GENERATED ADDRESS:');

if (flag >= 1 && flag < 3)	{

	console.log(numGenerator(1, 1500) +
	addresses[Math.floor(Math.random() * 9)] + '\n');

}	else	{

	console.log(numGenerator(1, 1500) +
	addressesWithAptNumbers[Math.floor(Math.random() * 9)] + '\n');

}	// end if-else

