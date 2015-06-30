  $(document).ready(function() {
    var mapCanvas = document.getElementById('map-canvas');

    var madrid = new google.maps.LatLng(49.5, 22);
    var mapOptions = {
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    map.setCenter(madrid);

  
  $('#btn-search').on('click', function() {
  var search = $('#address').val(); 
    $.ajax({
        type: 'GET',
        url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+search+'&sensor=false',
        success: function(response){initialize(response)},
        error: function(){alert('KO')}

    });
  });

  function initialize(response) {
    var lat = response.results[0].geometry.viewport.northeast.lat;
    var lng = response.results[0].geometry.viewport.northeast.lng;

    var location = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    map.setCenter(location);

    var marker = new google.maps.Marker({
      map: map,
      position: location

    })
  };

//MULTIPLE MARKERS 
  $.ajax({
        type: 'GET',
        url: '/chains'+search+'&sensor=false',
        success: function(response){initialize(response)},
        error: function(){alert('KO')}
    });

  var multipleMarker =  $('#address').val(); 
    for( i = 0; i < markers.length; i++ ) {
        var location = new google.maps.LatLng(markers[i][1], markers[i][2]);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
         });
      }

});