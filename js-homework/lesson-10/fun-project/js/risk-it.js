// risk-it.js
//
// Lesson 10 Homework
//
// Robert Hieger

// Wait for DOM to load.

$(document).ready(function()    {

    $('#risk-it-button').on('click', function() {

        // Random value between 0 and 5 seconds.

        var interval = Math.ceil(Math.random() * 5000);

        console.log(interval);

        window.setTimeout(function()    {

            $('#bigKitten').show();

        }, interval);   // end window.setTimeout()

    }); // $('#risk-it-button').on('click')
    
}); // end $(document).ready()
