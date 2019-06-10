var map1 = new google.maps.Map(document.getElementById("googleMap1"), myMap1());
var map2 = new google.maps.Map(document.getElementById("googleMap2"), myMap2());

function myMap1() {
  var mapProp1 = {
    center: new google.maps.LatLng(20.708895, -103.414143),
    zoom: 11,
  };
  return mapProp1;
}
function myMap2() {
  var mapProp2 = {
    center: new google.maps.LatLng(20.708895, -103.414143),
    zoom: 11,
  };
  return mapProp2;
}