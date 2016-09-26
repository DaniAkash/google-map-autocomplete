GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
var autocomplete = [];
var place = [];
var loadGoogleMapAutocomplete = function (fields){
  GoogleMapsLoader.load(function(google) {
    fields.forEach(function(each, index){
      autocomplete[index] = new google.maps.places.Autocomplete($("#"+each)[0], {});

      google.maps.event.addListener(autocomplete[index], 'place_changed', function() {
        place[index] = autocomplete[index].getPlace();
        console.log(place[index].geometry.location.lat()+', '+place[index].geometry.location.lng());
        $("#"+results[index]).text(place[index].geometry.location.lat()+', '+place[index].geometry.location.lng());
      });
    });
  });
};
