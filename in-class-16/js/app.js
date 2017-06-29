// app.js
//
// Robert Hieger
//
// In-Class 16 Project

// NOTE: This in-class project hit a road block when throttling from the Pokemon API
// stopped further server requests. Robert Ross is searching for a solution. Will not
// happen in this class.

$(document).ready(function()    {

  console.log('I\'m here! 🍝');

  var perPage = 50;

  var retrievePokemon = function(offset)  {

     $.get('https://pokeapi.co/api/v2/pokemon-species/?offset=' + offset, function(parsed) {

      console.log(parsed);

    var species = parsed.results;

    for (var i = 0; i < species.length; i++) {

      console.log(species[i].name);

      if ( (species.length > 0) ) {

        retrievePokemon(offset + perPage);

      }

    } // end for

    // console.log(parsed.results[0].name);
  
  }); // end $.get()


  };

  retrievePokemon(0);
 
}); // end $(document)
