mapboxgl.accessToken = 'pk.eyJ1IjoiYmFyYW5jY2siLCJhIjoiY2xmZWExOGRiMGtqYjQ2bHJ1Z2EwOWM4cyJ9.kZbE8M1Ky_D65oBWGAUbOA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/standard-satellite', // style URL
    center: [39.86558297236142, 32.73386039943825], // starting position [lng, lat]
    zoom: 1 // starting zoom
});

const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');

for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    };
}