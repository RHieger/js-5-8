// 99-bottles.js
//
// Robert Hieger

/* 99 Bottles of Beer Lyrics from Wikipedia:
 *
 * 99 bottles of beer on the wall, 99 bottles of beer.
 * Take one down, pass it around, 98 bottles of beer on the wall...
 *
 * The same verse is repeated, each time with one bottle fewer,
 * until there are none left.
 *
 * Variations on the last verse following the last bottle going down include
 * lines such as:
 *
 * No more bottles of beer on the wall, no more bottles of beer.
 * We've taken them down and passed them around;
 * now we're drunk and passed out!
 *
 */

 console.log('\n');

 for (var i = 99; i >= 0; i--)	{

 	if (i === 0)	{

 		// If there are only 0 bottles of beer left on the wall.

 		console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
 		console.log('We\'ve taken them down and passed them around;\nnow we\'re ' +
 			'drunk and passed out!');
 		console.log('\n');

 	}	else if (i === 1) {

 		console.log(i + ' bottle of beer on the wall, ' + i + ' bottle of beer.');
 		console.log('Take one down, pass it around, ' + (i - 1) + ' bottles of ' + 
 			'beer on the wall...');
 		console.log('\n');

 	}	else {

		console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
 		console.log('Take one down, pass it around, ' + (i - 1) + ' bottles of ' + 
 			'beer on the wall...');
 		console.log('\n'); 		

 	}	// end if-else if-else

 }	// end for