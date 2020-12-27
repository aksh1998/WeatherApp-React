let lat = 0;
let long = 0;

export const geoLock = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
    }
}
function displayLocation(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log(lat, long);
}

export const getCoordinate = () => {
    geoLock();
    return ({ lat, long });

}