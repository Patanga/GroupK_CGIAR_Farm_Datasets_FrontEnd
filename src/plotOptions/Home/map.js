import L from 'leaflet'

var map;

export function updateMap(dataset) {
    // Add a circle for each record from the dataset
    dataset.forEach(e => {
        if (isNaN(e.gps_lat) || isNaN(e.gps_lat)) {
            // console.log('NaN in gps [' + e.gps_lat + ', ' + e.gps_lon + '], id_uique: ' + e.id_unique);
            return;
        }
        L.circle([e.gps_lat, e.gps_lon], {
            radius: 100000,
            opacity: 0.4,
            color: '#ff4500'
        }).addTo(map).bindPopup('Unique ID: ' + e.id_unique +
                                '<br/>Country: ' + e.id_country +
                                '<br/>Region: ' + e.region +
                                '<br/>Project: ' + e.id_proj);
    });
}

export function renderMapTile(dataset) {
    // Map initialization
    map = L.map('map').setView([30, 10], 3);

    // Add backgroud map data layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
}
