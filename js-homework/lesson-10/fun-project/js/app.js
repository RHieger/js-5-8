// app.js
//
// Lesson 10 Homework
//
// Robert Hieger

$(document).ready(function()  {

    var successText = 'Getting currrent weather&hellip;';

    var errorText = 'You must enter a latitude and longitude.';

    // Select button#get-weather and attach click
    // event handler.

    $('#get-weather').on('click', function(event)  {

        // Prevent #get-weather default behavior.

        event.preventDefault();

        if ( $('#longitude').val() === '' || $('#latitude').val() === '' )  {

            $('#alert').addClass('alert alert-danger');
            $('#alert').html(errorText);

        }   else {

            $('#alert').addClass('alert alert-success');
            $('#alert').html(successText);

        }   // end-if-else

        $('#alert').show();

        console.log('Work?');

        // Get the value of longitude from input#longitude.

        var long = $('#longitude').val();

        // Get the value of latitude from input#latitude.

        var lat = $('#latitude').val();

        console.log(long, lat);

        // Our URL format:

        // https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/long,lat

        var baseURL = 'https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43';

        var weatherURL = baseURL + '/' + long + ',' + lat;

        console.log(weatherURL);

        $.get(weatherURL, function(response) {

            console.log(response);

            var currentTemp = response.currently.temperature;

            $('#current-temp').html(currentTemp);

            var humidity = response.currently.humidity;

            $('#humidity').html(humidity * 100 + '%');

            var currentWind = response.currently.windSpeed;

            $('#current-wind').html(currentWind);

            // Hide alert after weather is displayed.

            $('#alert').hide();

        });

    }); // end $('#get-weather')

}); // end $(document).ready()
