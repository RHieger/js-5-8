function foo()	{

	console.log('Hello');

}	// end foo()

// Call foo.

foo();

function bar(name)	{

	console.log('Hello ' + name);

}	// end bar(name)

// Call bar(name)

bar('Robert');

bar('Bobby');

bar('Jerry');

bar('Ted Mosbey');

console.log('\n');

function sum(a, b)	{

	console.log(a + b);

}	// end sum(a, b)

// Demonstrate error when only one of two parameters are included.

sum(4);

sum(4, 5);

// Functions using a return statement.

function yellSomething(something)	{

	return something.toUpperCase();

}	// end yellSomething(something)

console.log('\n');

var chicken = yellSomething('piglet');

console.log(chicken);