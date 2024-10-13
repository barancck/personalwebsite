const toggleSwitch = document.getElementById('dark-mode-toggle');
const body = document.body;
const elementsToToggle = document.querySelectorAll('header, .about, .skills, .experience, .education, .contact, footer');

// Event listener for the dark mode switch
toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    elementsToToggle.forEach(el => el.classList.toggle('dark-mode'));
});


//Map

/*
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFyYW5jY2siLCJhIjoiY2xmZWExOGRiMGtqYjQ2bHJ1Z2EwOWM4cyJ9.kZbE8M1Ky_D65oBWGAUbOA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
}); 
*/
function visitPlaces() {
  window.location.href = 'mappage.html'; // Harita sayfanın yolu
}

