var map;
var infowindow;
var myPlace = {lat: 25.276987, lng: 55.296249 };
//Call your nearBySearch

var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location : myPlace,
                radius : 5500,
                type : [ 'restaurant' ]
            }, callback);
//Check the result of search and then create a marker for each found location

function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }

function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map : map,
                position : place.geometry.location
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
            });
        }