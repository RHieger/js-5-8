var age = 62;

if (age < 16)	{

	console.log('Sorry, you aren\'t allowed to do anything, and you have to go to school.');

}	else if (age > 16 && age < 18)	{

	console.log('Hey, you have a driver\'s license. You can drive!');

}	else if (age >= 18 && age < 21)	{

	console.log('Wow, you can both drive and you\'re allowed to vote!');

} 	else if (age >= 21 && age < 25)	{

	console.log('You can drive, you\'re allowed to vote and you can legally drink alcohol!');

}	else if (age >= 25 && age < 35)	{

	console.log('You can drive, you\'re allowed to vote, you can legally drink alcohol, and ');
	console.log('you can legally rent a car!');

}	else if (age >= 35 && age < 62)	{

	console.log('You can drive, you\'re allowed to vote, you can legally drink alcohol, ');
	console.log('you can legally rent a car, and you\'re old enough to run for President!');

}	else {

	console.log('You\'re 62 or older. There isn\'t anything you can\'t do.');

}