$(document).ready(function() {

  // DOM is now ready

    _500px.init({

      sdk_key: '8e4916b354f68466843a3d3e1aaf2ee2df6e8002'

    });   // end _500px.init()

    $('#login').click(function()  {

      _500px.login();

    });   // end $('#login').click()

    _500px.on('authorization_obtained', function()  {

      console.log('Authorized successfully!');

      $('#login').hide();

      $('#getPhotos').show();

    });   // end _500px.on()

    // Attach Click Event Handler to button#getPhotos.

    $('#getPhotos').click(function()  {

      navigator.geolocation.getCurrentPosition(function(pos)  {

        console.log(pos);

        var lat = pos.coords.latitude;

        console.log('Current Latitude:\t' + lat);

        var long = pos.coords.longitude;

        console.log('Current Longitude:\t' + long);

        var SearchOptions = {

          geo:  lat + ',' + long + ',' + '25mi',
          only: 'landscapes',
          image_size: 3,
          rpp: 28,
          sort: 'highest_rating'

        };  // end SearchOptions

        // Make the request:

        _500px.api('/photos/search', SearchOptions, function(response)  {

          console.log(response);

          var photos = response.data.photos;

          console.log(photos);

          for (var i = 0; i < photos.length; i++) {

            // Create new image tag for each photo returned.
            // The attr() method dynamically changes the url.

            var newImage = $('<img />').attr('src', photos[i].image_url)
                                       .addClass('image');

            console.log(newImage);

            // Append newImage to div.images:

            $('.images').append(newImage);

            // Reveal requested images:

            $('.image-results-view').show();

          } // end for

        }); // end _500px.api()

      }); // end navigator.geolocation.getCurrentPosition()

    });   // end $('#getPhotos').click()

});     // end $(document).ready()
