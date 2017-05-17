/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */

// Your code here

// var imgSrc = [...]


/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */

// Your code here

// var q2 = imgSrc[0];


/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

// Your code here

// var q3 = imgSrc.length;


/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */


// Your code here

// var q4 = imgSrc.length - 1;


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */

// Your code here

// var numbers = [1, 2, 3, 4];


/**
 * Question 2
 * Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q2.
 */


// Your code here

/* MY SOLUTION */

var imgSrc = ['image1.png', 'image2.png', 'image3.png'];

console.log('\n');

console.log(imgSrc);

console.log('\n');

var q2 = imgSrc[0];

console.log(q2);

console.log('\n')

var q3 = imgSrc.length;

console.log(q3);

console.log('\n');

var q4 = q3 - 1;

console.log(q4);

var numbers = [1, 2, 3, 4];

console.log('Original Array', numbers);

console.log('\n');

for (var i = 0; i < numbers.length; i++)	{

	numbers[i] += 1;

}

console.log('Modified Array', numbers);

console.log('\n');

var numbersTotal = 0;

for (var i = 0; i < numbers.length; i++)	{

	numbersTotal += numbers[i];

}

console.log('\n');

numbersAvg = numbersTotal / numbers.length;

console.log('Average of Numbers in Original Array', numbersAvg);

console.log('\n');