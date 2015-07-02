$(document).ready(function() {
  var mapCanvas = document.getElementById('map-canvas');

  var madrid = new google.maps.LatLng(49.5, 22);

  var mapOptions = {
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);
  map.setCenter(madrid);

  $.ajax({
    type:'GET',
    url:'/chains',
    dataType:'json',
    success: function(cityPoint){
      for(var i = 0; i < cityPoint.length; i++) {
        for(var j = 0; j < cityPoint[i].length; j++) {
          $.ajax({
              type: 'GET',
              url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+cityPoint[i][j].address+'&sensor=false',
              success: function(response){
                console.log(response);
                var lat = response.results[j].geometry.viewport.northeast.lat;
                var lng = response.results[j].geometry.viewport.northeast.lng;

                var location = new google.maps.LatLng(lat, lng);
                var marker = new google.maps.Marker({
                    position: location,
                    map: map            
                 });
                },
              error: function(){alert('KO');}
          });
        }
      }

    },
    error: function(){alert('caca');}
  });
  
/*
$('#btn-search').on('click', function() {
  
});*/

});