'use strict';


// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbar_a = document.querySelector('.navbar__logo a')
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
        navbar_a.classList.add('navbar--dark');
    }
    else {
        navbar.classList.remove('navbar--dark');
        navbar_a.classList.remove('navbar--dark');
    }

})