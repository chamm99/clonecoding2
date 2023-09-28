
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longtitude;
}
function onGeoError(){
    alert("cnat findya")
}
navigator.geolocation.getCurrentPosition();