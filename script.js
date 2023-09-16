var x = document.getElementById("demo");
let longitude = 0
let latitude = 0
let q = 0

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  longitude = position.coords.longitude
  latitude = position.coords.latitude
  console.log(latitude+","+longitude)
  q=latitude+","+longitude
  console.log(q)
}

