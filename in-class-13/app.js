// replace this entire code block with the config found in the firebase dashboard
// for your created database
// Initialize Firebase

var config = {

    apiKey: "AIzaSyD0lV7L3VS3SLswYD5EdcUXPD1B1ggfR7U",
    authDomain: "sampleproject-1e0cb.firebaseapp.com",
    databaseURL: "https://sampleproject-1e0cb.firebaseio.com",
    projectId: "sampleproject-1e0cb",
    storageBucket: "sampleproject-1e0cb.appspot.com",
    messagingSenderId: "1048586306211"

};  // end config


firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

$(document).ready(function()    {

    $('#add-button').on('click', function() {

        console.log($('#new-item').val());

        var value = $('#new-item').val();

        // Grab a reference to the 'todo-items' in firbase
        // and then create a new item on which we set data.

        var item = database.ref('/todo-items').push();

        item.set( { value: value } );

    });

    // Grab a reference to the todo-items key and ...

    database.ref('/todo-items').on('value', function(snapshot)  {

        var list = $('#list-items');

        list.empty();   // Make sure that previous items are not repeated.

        console.log(snapshot.val());

        snapshot.forEach(function(listItem) {

            console.log(listItem.val().value);

            var item = listItem.val().value;

            list.append('<li data-id="' + listItem.key +'">' + item +
                ' <a href="#" class="remove">Remove</a></li>');

        }); // end snapshot.forEach()

    }); // end database.ref()

    $('#list-items').on('click', 'li a', function() {

        // Retrieve the value of the 'data-id' attribute on the parent <li> element
        // so it may be removed from Firebase.

        var itemId = $(this).parent().data('id');

        // Remove the list item from Firebase.

        database.ref('/todo-items/' + itemId).remove();

    });

});
