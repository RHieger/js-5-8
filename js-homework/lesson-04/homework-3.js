// homework-3.js
//
// Robert Hieger (Bobby)
//
// Due by May 25, 11:59 PM

/******************************************************************************
 *																			  *
 * Given an array with these elements in it:   								  *
 *																			  *
 * var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];								  *
 *																			  *
 * Write a function that returns the largest element in an array.			  *
 *																			  *
 * Write a function that checks whether an element occurs in an array. Make   *
 * the function return true or false. For example: 							  *
 *																			  *
 * function inArray(array, element) { ... }									  *
 *																			  *
 * if (inArray(numberList, 3)) { console.log("It exists!") }				  *
 *																			  *
 * Write a function that returns the elements on odd positions in an array.	  *
 * For the list given above, it would print 5, 20, 90						  *
 *																			  *
 * Write a function that computes the running total of an array. (IE: What	  *
 * is the sum of all of the values in an array)								  *
 *																			  *
 * Write a function that tests whether a string is a palindrome. For example  *
 * "racecar" would return true, but "cat" would not.						  *
 *																			  *
 * You can do all of these in 1 javascript file.							  *
 *																			  *
 ******************************************************************************
*/

// MY SOLUTIONS:

// Functions:

var numberList = [1, 5, 2, 20, 7, 90, 3];

function getMaxElement(arr)	{

	for (var i = 0; i < numberList.length; i++)	{

		return Math.max.apply(Math, arr);

	}	// end for

}	// end getMaxElement(arr)

function isInArray(arr, num)	{

	var status = numberList.indexOf(num);

	if (status !== -1) {

		// var msg =  toString(num.value) + ' is present in numberList.';

		var num = num;

		var msg = num + ' is present in numberList.';

		return msg;

	}	else {

		var msg = num + ' is not present in numberList.';

		return msg;

	}	// end if-else

}	// end isInArray()

// END Functions

console.log('\nvar numberList =', numberList);
console.log('\nFind the largest array element using getMaxElement(arr):')

var largestElement = getMaxElement(numberList);

console.log('\nThe Largest Element in array numberList is:', largestElement, '\n');

console.log('Check to see if element is present in array using isInArray(arr, value):\n')

var answer = isInArray(numberList, 7);

console.log(answer, '\n');

answer = isInArray(numberList, 55);

console.log(answer, '\n');
