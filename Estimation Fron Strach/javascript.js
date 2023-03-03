let map, directionsService, directionsRenderer;
let sourceAutocomplete, destAutocomplete;
let autocomplete;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 5.55602, lng: -0.1969 }, 
    zoom: 8,
    scrollwheel:true
  });
  directionsService = new google.maps.DirectionsService()
  directionsRenderer = new google.maps.DirectionsRenderer()
  directionsRenderer.setMap(map)

  sourceAutocomplete = new google.maps.places.Autocomplete(
    document.getElementById('source')
  )
  destAutocomplete = new google.maps.places.Autocomplete(
    document.getElementById('dest')
  )
  }
function calcRoute(){
    var source = document.getElementById('source').value 
    var dest = document.getElementById('dest').value 

    let request = {
        origin: document.getElementById('source').value,
        destination: document.getElementById('dest').value,
        travelMode:'WALKING',
    }
    directionsService.route(request,function(result, status){
        if(status == 'OK'){
            //SHOW ON THE MAP IF OK
            directionsRenderer.setDirections(result)
        }
    })
}
window.initMap = initMap;