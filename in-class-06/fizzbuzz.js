// fizzbuzz.js

/*
    Write a program that prints the numbers from 1 to 100. But for multiples of three print
    “Fizz” instead of the number and for the multiples of ﬁve print “Buzz”. For numbers which
    are multiples of both three and ﬁve print “FizzBuzz"
*/

console.log('\n')

for (var i = 1; i <= 100; i++)	{

	// FINISH THIS AS PART OF HOMEWORK.
	// MY SOLUTION:

	switch (true)	{

		case (i % 3 === 0):
			console.log('\tFizz');
			break;

		case (i % 5 === 0):
			console.log('\tBuzz');
			break;

		case (i % 3 === 0 && i % 5 === 0):
			console.log('\tFizzBuzz');
			break;

		default:
			console.log('\t' + i);

	}	// end switch(i)


}	// end for

console.log('\n');