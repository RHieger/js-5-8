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

function returnOddItems(arr)	{

	for (i = 0; i <= arr.length -1; i++)	{

		if(i !== 0 && i % 2 !== 0)	{

			console.log('Element ' + i + ':\t' + arr[i]);

		}	// end if

	}	// end for

}	// end returnOddItems()

function runningTotal(arr)	{

	var sum = 0;

	for (i = 0; i <= arr.length -1; i++)	{

		if (i === 0)	{

			sum = arr[i];

			console.log('Index ' + i + ':\t = ' + sum);

		}	else {

			sum += parseInt(arr[i]);

			console.log('Index ' + (i) + ':\t + '  + arr[i] + ' = ' + sum);

		}	// end if-else

	}	// end for

}	// end runningTotal(arr)

function isPalindrome(string)	{

	for (var i = 0; i < string.length; i++)	{

		if (string[i] !== string[string.length - i -1])  {

			console.log('\'' + string + '\' is NOT a palindrome.\n');

			return false;

		}	else {

			console.log('\'' + string + '\' IS a palindrome.\n');

			return true;

		}	// end if-else

	}	// end for

}	// end isPalindrome(string)

// END Functions

// Call Each Function:

console.log('\nvar numberList =', numberList);

console.log('\nFind the Largest Array Element Using getMaxElement(arr):')

var largestElement = getMaxElement(numberList);

console.log('\nThe Largest Element in Array numberList is:', largestElement, '\n');

console.log('Check to See if Element is Present in Array Using isInArray(arr, value):\n')

var answer = isInArray(numberList, 7);

console.log(answer, '\n');

answer = isInArray(numberList, 55);

console.log(answer, '\n');

console.log('Return Odd Element Indexes of numberList Using returnOddItems(arr):\n');

returnOddItems(numberList);

console.log('\n');

console.log('Give Running Total of Elements in numberList Using runningTotal(arr):\n');

runningTotal(numberList);

console.log('\n');

console.log('Testing testString1 to See if it is a Palindrome Using isPalindrome(string):\n');

var testString1 = 'is this a palindrome';

isPalindrome(testString1);

console.log('Testing testString2 to See if it is a Palindrome Using isPalindrome(string):\n');

var testString2 = 'able was i ere i saw elba';

isPalindrome(testString2);
