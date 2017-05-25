// dog-breed.js
//
// In-Class Exercise
//
// Robert Hieger

/*

Define 3 objects.

On each of the objects have a "breed", "name"" and color key assigned to a
value of your choosing. Assign each of the objects to their own variable.

Using console.log, print out the name and breed for each of the objects
you've assigned.

*/

var dog1 = { breed: 'Pug', name: 'Buddy', color: 'beige'};

var dog2 = { breed: 'Labrador', name: 'Kira', color: 'yellow'};

var dog3 = { breed: 'Jack Russell Terrier', name: 'Eddie', color: 'white'};

console.log('\n');

console.log('Name:\t', dog1.name, '\nBreed:\t', dog1.breed, '\n');

console.log('Name:\t', dog2.name, '\nBreed:\t', dog2.breed, '\n');

console.log('Name:\t', dog3.name, '\nBreed:\t', dog3.breed, '\n');

// Do the same thing with a function:

function listDog(dog)	{

 	 console.log('Name:\t', dog.name, '\nBreed:\t', dog.breed, '\n');

}

console.log('\nThe same thing accomplished using listDog(dog) Function:\n');

listDog(dog1);

listDog(dog2);

listDog(dog3);