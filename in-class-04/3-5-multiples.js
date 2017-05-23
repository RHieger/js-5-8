// 3-5-multiples.js
//
// Robert Hieger
//
// In-Class Challenge

/******************************************************************************
 *																			  *
 * If we list all the natural nubmers below 10 that are multiples of 3 or 5,  *
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.					  *
 *																			  *
 * Find the sum of all the multiples of 3 or 5 below 1000 and print out		  *
 * the answer.																  *
 *																			  *
 ******************************************************************************
*/

// METHOD 1:

var sum = 0;

for (var i = 1; i < 1000; i++)	{

	if(i % 3 === 0 || i % 5 === 0)	{

		sum += i;

	}	// end if

}	// end for

console.log('\nThe sum of all these multiples is', sum, '\n');

// METHOD 2:

sum = 0;

var number = 0;

while (number < 1000)	{

	if (number % 3 === 0 || number % 5 === 0)	{

		sum += number;

	}	// end if

	number++;

}	// end while

console.log('\nThe sum of all these multiples is', sum, '\n');

// METHOD 3 (USE A FUNCTION):

function validNumber(number)	{

	/* Only numbers divisible by 3 or 5 with a remainder
	 * of 0 are considered valid. */

	if (number % 3 === 0 || number % 5 === 0)	{

		return number;

	}	else	{

		return 0;

	}	// end if-else

}	// end validNumber(number)

sum = 0;		// Reset value of sum.

for (var i = 1; i < 1000; i++)	{

	

	// Add number to sum.

	sum += validNumber(i);

}	// end for


console.log('\nThe sum of all these multiples is:', sum, '\n');