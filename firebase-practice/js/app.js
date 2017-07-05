// app.js
//
// Firebase Practice Video
//
// Robert Hieger

// console.log('This is wired up correctly.');

// console.log(firebase);

$(document).ready(function()  {

  // console.log('Web page has loaded.');

  var database = firebase.database();

  var listRef = '/my-awesome-list';

  // var newValue = {chicken: 'Crossed the road'};

  // database.ref('/Helloworld').set(newValue);

  // var ref = database.ref('/Helloworld');

  // ref.on('value', function(snapshot) {

    // var value = snapshot.val();

    // console.log(value.chicken);

  // }); // end ref.on()

  var myItem = database.ref(listRef).push();

  var itemValues = {

    dueDate: "today",
    homeWork: "hard"

  };

  myItem.set(itemValues);

  // Loop over entries:

  database.ref(listRef).on('value', function(snapshot)  {

    var listValues = snapshot.val();

    // listValues.forEach(function(itemValue) {

    //   console.log(itemValue);

    // })

    // Get an array of all object keys that has
    // come from Firebase.

    var allObjectKeys = Object.keys(listValues);

    console.log(allObjectKeys);

    // Iterate over each of the keys.

    for (var i = 0; i < allObjectKeys.length; i++)  {

      // Get the value for each key using the [] syntax.

      var objectKey = allObjectKeys[i];

      var value = listValues[objectKey];

      var newElement = $("<p></p>").text(value.homeWork);

      // Append the new paragraph to the body of the document.

      newElement.appendTo('body');

    } // end for

  });

}); // end $(document).ready()
