// monkey.js
//
// Robert Hieger

/* OBJECTIVE:

Properties:

•	name
•	species
•	foodsEaten

Methods:

•	eatSomething(thingAsString) that prints out “thingAsString” and the name of the monkey.
•	introduce: producers a string introducing itself, including its name, species, and what it's eaten.

*/

var Monkey = function(name, species, foodsEaten)	{

	// Set object properties:

	this.name = name;
	this.species = species;
	this.foodsEaten= foodsEaten;

};

Monkey.prototype.eatSomething = function(food)	{

	this.foodsEaten += ', ' + food + '.';

	console.log('\n' + this.name + ' has enjoyed a ' + food + '.');

}	// end eatSomething()

Monkey.prototype.introduce = function()	{

	console.log(this.name + ' has eaten a ' + this.foodsEaten);

}

var monkey1 = new Monkey('Jimmy', 'Spider Monkey', 'chunk of tree bark');

monkey1.eatSomething('banana');

monkey1.introduce();

console.log('\n');