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

  var database = firebase.database();

  var todoListRef = database.ref('/toDoList');

  // Add functionality for adding items to firebase when a button is clicked.

  $('#add-item-btn').on('click', function(event)  {

    event.preventDefault()

    var itemDescription = $('#todo-description').val();
    var itemName = $('#todo-name').val();

    console.log('Button clicked!');

    console.log("Values", itemDescription, itemName);

    // Write the values to the database.

    var newItem = todoListRef.push(); // Create the variable for new item.

    // Now let's write the new item.

    newItem.set({ name: itemName, description: itemDescription });

  });

  //  load all of the items from firebase on page load and when it changes
  todoListRef.on('value', function(items){
    $('#todo-items').empty();

    items.forEach(function(item){
      var id = item.key;
      var name = item.val().name;
      var description = item.val().description;
      var completedAt = item.val().completedAt;

      var completedText = "";

      if(completedAt !== undefined){

        var parsedDate = new Date(completedAt);

        completedText = parsedDate.toDateString();

      } // end if

      var newElement = '<div class="panel panel-default">' +
        '<div class="panel-heading">' + name + '</div>' +
        '<div class="panel-body">' + description + '</div>' +
        '<div class="panel-footer"><a href="#" data-item-id="' +  id +
        '" class="mark-completed">Mark as Completed</a> ' +
        completedText +'</div>' + '</div>';

      $('#todo-items').append(newElement);

    });

  });

  // add click event handler to "mark as completed" links

  $('#todo-items').on('click', 'a.mark-completed', function(event) {
    
    var id = $(this).data('item-id');

    var itemRef = database.ref("/todo-list-items/" + id);

    var now = new Date();

    itemRef.update({ completedAt: now.getTime()})

  });

 });  // end $(document).ready()
