$(document).ready(function(){
	/*$.ajax({
		type: 'GET', 
		url: '/chains/1',
		dataType: 'json',
		success: function (response){
			initialize(response);
			console.log(response);
		},

		error: function (){
			alert('Error');
		}	

	});
*/
	var map;
	function initialize(response) {

		 var mapOptions = {
		   zoom: 8,
		   center: new google.maps.LatLng(response[0],response[1])

		 };
		 map = new google.maps.Map(document.getElementById('map-canvas'),
		     mapOptions);
 
	}

});


