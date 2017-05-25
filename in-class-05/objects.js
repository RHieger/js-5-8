// objects.js

var Person = function(name, age)	{

	this.name = name;

	this.age = age;

};

Person.prototype.canDrive = function()	{

	if (this.age >= 16)	{

		return true;

	}	else	{

		return false;

	}	

}

var robert = new Person('Robert', 16);

console.log('\nThe person is:', robert.name, '\n');
console.log('This person\'s age is: ', robert.age, '\n');

console.log('Can they drive? ', robert.canDrive(), '\n');