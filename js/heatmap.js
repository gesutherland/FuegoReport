let heatmapData = [
    { location: new google.maps.LatLng(-34.397, 150.644), weight: 1 },
    { location: new google.maps.LatLng(-34.407, 150.654), weight: 2 },
    // Add more data dynamically based on form submissions
];

const heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 20
});

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    heatmap.setMap(map);

    // Add markers for high-density areas
    heatmapData.forEach(point => {
        if (point.weight > 1) { // Adjust the threshold as needed
            const marker = new google.maps.Marker({
                position: point.location,
                map: map,
                title: 'High activity area!'
            });

            const infowindow = new google.maps.InfoWindow({
                content: 'Alert: High number of ICE reports in this area!'
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        }
    });
}