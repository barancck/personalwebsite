const toggleSwitch = document.getElementById('dark-mode-toggle');
const body = document.body;
const elementsToToggle = document.querySelectorAll('header, .about, .skills, .experience, .education, .contact, footer');

// Event listener for the dark mode switch
toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    elementsToToggle.forEach(el => el.classList.toggle('dark-mode'));
});
