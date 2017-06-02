// fizzbuzz-bobbytables.js
//
// This is the instructor's version of the FizzBuzz
// problem, using a for loop in another creative way.

// Set up a for loop that will run 100 times.
//
// NOTE: Instructor's solution does only 100 times,
// inclusive of 0-99. My solution was inclusive of
// the number 100, which means my loop actually runs
// 101 times. The principle, however, remains the same.

for(var i = 0; i < 100; i++) {

	// v is a null string to which we concatenate Fizz or Buzz.		

	  var v = "";

	  // Ternary conditional evaluates whether i is divisible by 3.
	  // If it is, "Fizz" is concatenated to v.

	  v += (i % 3 == 0) ? "Fizz" : "";

	  // Ternary conditional evaluates whether i is divisible by 5.

	  v += (i % 5 == 0) ? "Buzz" : "";

	  // If nothing has been concatenated to v, log i to console
	  // by itself.

	  if(v.length == 0) {

	    console.log(i)

	  } else {

	    // Otherwise log concatenated string contained in v.

	    console.log(v)

	    // NOTE: because both ternary conditionals can evaulate as
	    // true, if i is divisible by both 3 and 5, "FizzBuzz" will
	    // be logged to the console, per requirements of the exercise.

	  }	// end if-else

}	// end for