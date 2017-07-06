// app.js
//
// In-Class-17 Project
//
// TO-DO List
//
// Teacher Solution
//
// July 5, 2017

$(document).ready(function()  {

  console.log('Hello');

  var database = firebase.database();

  var todoListRef = database.ref('/toDoList');

  $('#addItem').on('click', function(event) {

    event.preventDefault();

    var $itemName = $('#todo-name').val();

    var $description = $('#todo-description').val(); 

    console.log('Values', $description, $itemName );

    var newItem = todoListRef.push();

    newItem.set( { name: $itemName, description: $description} );

  });

  todoListRef.on('value', function(items)  {

    console.log(items.val());

    var items = items.val();

    items.forEach(function(item)  {

      console.log(item.val.description);

    });

  });

 });  // end $(document).ready()
