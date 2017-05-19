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

 // NOTE REGARDING BONUS:
 //
 // Not sure if my solution to the bonus is technically cheating. I was unable
 // to think of another solution but simply including elements within the array
 // that also had apartment numbers. However, including such elements within
 // the array might be interpreted as violating DRY principles.
 //
 // Nonetheless, the solution does work.

var addresses = [
 	'72 East 4th Streeet #5C, New York, NY 10003',
	'634 East Michelle Street, West Covina, CA 91790', 		
	'568 North Bronson Avenue, Los Angeles, CA 90004',
 	'6823 Matilija Avenue, Los Angeles, CA 91405',
 	'336 West 95th Street, New York, NY 10025',
 	'21 East 3rd Street #2C, New York, NY 10003',
 	'515 East 12th Street, New York, NY 10009',
 	'205 East 4th Street #7, New York, NY 10009', 				 
 	'10 East 21st Street, New York, NY 10010'
];

 console.log('\nRANDOMLY-GENERATED ADDRESS:\n');

 console.log(addresses[Math.floor(Math.random() * 9)] + '\n');