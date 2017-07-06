// app.js
//
// In-Class-17 Project
//
// TO-DO List
//
// Robert Hieger
//
// July 5, 2017

$(document).ready(function()  {

  var $taskName = $('#todo-name');

  var $description = $('#todo-description');

  var database = firebase.database();

  $('#addItem').on('click', function()  {

    

  });

  var dbRef = database.ref('/toDoList');

  var newItem = dbRef.push();

  var itemValues = { name: $taskName.text(),
                     description: $description.text() };

  newItem.set(itemValues);

  console.log(itemValues);

  dbRef.on('value', function(snapshot) {

    console.log('Values retrieved');

  }); // end dbRef.on()

 });  // end $(document).ready()
