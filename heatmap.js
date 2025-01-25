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
}
