# Google Map Autocomplete

[![TeamCity (simple build status)](https://img.shields.io/teamcity/http/teamcity.jetbrains.com/s/bt345.svg)]() [![Bower](https://img.shields.io/bower/v/bootstrap.svg)]()

Get google map auto complete results for all the inputs present in page. Easy as 1,2,3

1. Install google-map-autocomplete bower package and include it to your page.
```sh
bower install google-map-autocomplete
```

2. Add id to all the text inputs present in the page.
```html
<input id="input1" type="text"/>
<input id="input2" type="text"/>
<input id="input3" type="text"/>
```

3. Specify your key (either personal or business) and enable autocomplete on all the fields!!

```js
// Own API key
GoogleMapsLoader.KEY = 'Your Key Here';

// or Business API client
GoogleMapsLoader.CLIENT = 'yourclientkey';
GoogleMapsLoader.VERSION = '3.14';

// Just add autocomplete :)
loadGoogleMapAutocomplete(['input1', 'input2', 'input3']);
```

Apart from getting auto complete results, you can also get the result object in 'locationGenerated' event. Just add a listener to the input field using jQuery for that event to get further details about the location.

```js
$('#input1').on('locationGenerated', function () {
    console.log(locationResult.input1); // result object in locationResult.id-of-the-text-input
});

$('#input2').on('locationGenerated', function () {
    console.log(locationResult.input2);
});

$('#input3').on('locationGenerated', function () {
    console.log(locationResult.input3);
});
```

All the details present in the 'locationResult.id-of-text-input' object can be found at [Google Map Geocoding Documentation]

A good working example of the plugin is explained in this following pen: http://codepen.io/DaniAkash/pen/dpWWdG

All development related files are present in the development branch. The master branch only contains the minified js files.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Google Map Geocoding Documentation]: <https://developers.google.com/maps/documentation/geocoding/intro>
