function initMap() {
    // Latitude and Longitude
    var myLatLng = {
        lat: 10.7630118,
        lng: 106.6816844
    };
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 18,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'HCMUS - GMT+7' // Title Location
    });
}