// video.js

$(document).ready(function()   {

  var videoIds = ['APJsXF2TtFg', 'HxM46vRJMZs'];

  $('#random-video-btn').on('click', function(){

    $('#random-video').empty();

    var randIndex = Math.ceil(Math.random() * 100) % videoIds.length;

    console.log(videoIds[randIndex]);

    var element = $('<iframe width="100%" height="315" src="https://www.youtube.com/embed/' +
    	videoIds[randIndex] + '" frameborder="0" allowfullscreen></iframe>');

    $('#random-video').append(element);

    $('#add-video').on('click', function(){

      var currentID = $('#random-video-id').val();

      videoIds.push(currentID);

      $('#random-video-id').val("");

    });	// end $('#add-video').on('click')

  });	// end $('#random-video-btn').on('click')

});	// end $(document).ready()