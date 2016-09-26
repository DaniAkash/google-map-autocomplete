GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
var autocomplete = [];
var place = [];
var locationResult = {};
var loadGoogleMapAutocomplete = function (fields){
  GoogleMapsLoader.load(function(google) {
    fields.forEach(function(each, index){
      autocomplete[index] = new google.maps.places.Autocomplete($("#"+each)[0], {});

      google.maps.event.addListener(autocomplete[index], 'place_changed', function() {
        place[index] = autocomplete[index].getPlace();
        locationResult[each] = place[index];
        $("#"+each).trigger("locationGenerated");
      });
    });
  });
};
