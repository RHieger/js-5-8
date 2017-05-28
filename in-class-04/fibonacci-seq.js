// fibonacci-seq.js
//
// Robert Hieger
//
// In-Class Exercise 2:

console.log('\n\tFIBONACCI SEQUENCE UP TO AND INCLUDING 4 MILLION:\n');

var sequence = [1, 2];

var number = 0;

function addToSequence(arr, num)	{

		number = sequence[num] + sequence[num -1];

		sequence.push(number);

		return number;

}	// end addToSequence(num)

var i = 1;

do {

	var nextNum = addToSequence(sequence, i);

	console.log('\tNext Number in Sequence:', nextNum);

	i++;

}	while (nextNum < 4000000);

console.log('\n');
