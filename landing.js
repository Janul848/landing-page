let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let videoBtn = document.querySelectorAll('.vid-btn');
let navbar = document.querySelector('.navbar'); // Add this line to define the navbar

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active'); // Now navbar is defined
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active'); // Show the login form
    formBtn.classList.add('active'); // Optionally, indicate that the button is active
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active'); // Hide the login form
    formBtn.classList.remove('active'); // Optionally, remove active state from the button
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        // Check if there is an active control before removing the class
        const activeControl = document.querySelector('.controls .active');
        if (activeControl) {
            activeControl.classList.remove('active');
        }

        btn.classList.add('active');

        // Get the video slider element
        const videoSlider = document.querySelector('#video-slider');
        if (videoSlider) {
            let src = btn.getAttribute('data-src');
            videoSlider.src = src;
        } else {
            console.error("Video slider not found.");
        }
    });
});
    