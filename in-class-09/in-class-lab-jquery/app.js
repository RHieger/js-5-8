var url = 'https://js58-proxy.herokuapp.com/forecast/8cd342271b884a9607fd534e5955d21d/32.72,-40.00';

$.get(url, function(r) {

  $('body').html(r.currently.temperature);
  
}),